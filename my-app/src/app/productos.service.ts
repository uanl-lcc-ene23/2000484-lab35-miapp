import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getProductos(){ 
    return this.http.get('https://fakestoreapi.com/products');
  }
  getCategorias(){ 
    return this.http.get('https://fakestoreapi.com/products/categories');
  }
  getCategoria(category: string){
    return this.http.get('https://fakestoreapi.com/products/category/'+category);
  }
  getProducto(){ 
    
  }
}
