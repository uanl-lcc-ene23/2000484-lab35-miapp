import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Platform } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';
@Injectable({
  providedIn: 'root'
})
export class FotoServiceService {
  private plataforma : Platform;
  constructor(
    private platform: Platform
  ) {
    this.plataforma = platform;
  }
  //Nombre de variable : Tipo de dato = Valor de la variable;
  public foto: UserPhoto[] = [];
  public PHOTO_STORAGE: string = 'photos';
  public async addNewToGallery() {
    //preferencias
    Preferences.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.foto),
    });
    // Toma Foto
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    const guardaImagen = await this.savePicture(capturedPhoto);
    this.foto.unshift(guardaImagen);
  }
  private async savePicture(photo: Photo) {
    //Convierte foto a Base 64
    const base64Data = await this.readAsBase64(photo);

    // Escribe archivo en el directorio
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });

    if (this.plataforma.is('hybrid')) {
      console.log(savedFile.uri, Capacitor.convertFileSrc(savedFile.uri), "hybrid")
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    }
    else {
      console.log(fileName, photo.webPath, "web");
      return {
        filepath: fileName,
        webviewPath: photo.webPath
      };
    }

  }

  public async readAsBase64(photo: Photo) {
    if (this.plataforma.is('hybrid')) {
      // Read the file into base64 format
      const file = await Filesystem.readFile({
        path: photo.path || ''
      });

      return file.data;
    }
    // Busca foto, lee como blob y cambia a base64
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }

  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
  public async cargaFotosAlmacenadas() {
    // Regresa imagen de la cache
    const { value } = await Preferences.get({ key: this.PHOTO_STORAGE });
    this.foto = (value ? JSON.parse(value) : []) as UserPhoto[];

    //Cuando la plataforma no sea web, hara esto:
    if (!this.plataforma.is('hybrid')) {
      // Display the photo by reading into base64 format
      for (let photo of this.foto) {
        // Lee cada archivo guardado en el filesustem
        const readFile = await Filesystem.readFile({
            path: photo.filepath,
            directory: Directory.Data
        });

        // Web platform only: carga foto como datos en base64
        photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
      }
    }
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
