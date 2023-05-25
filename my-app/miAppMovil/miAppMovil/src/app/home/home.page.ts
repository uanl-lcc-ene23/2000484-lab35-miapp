import { Component } from '@angular/core';
import { FotoServiceService } from '../foto.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private fotoService: FotoServiceService) {}

  fotos = this.fotoService.foto;

  tomarFoto(){
    this.fotoService.addNewToGallery();
    this.fotos = this.fotoService.foto;
  }

}
