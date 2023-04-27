import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
  constructor(private http: HttpClient) {}

  getProductos(){
    return this.http.get('https://fakestoreapi.com/products')
  }

  getCategorias(){
  return this.http.get('https://fakestoreapi.com/products/categories')
  }

  getProducto(){
    return this.http.get('https://fakestoreapi.com/products/1')
  }

  getProductPorCategoria(){
   return this.http.get('https://fakestoreapi.com/products/category')
  }

}
