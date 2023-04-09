import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get('https://fakestoreapi.com/products');
  }

  getCategorias() {
    return this.http.get('https://fakestoreapi.com/products/categories');
  }

  getProducto(id: number) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }

  getProductoPorCategoria(categoria: string) {
    return this.http.get(`https://fakestoreapi.com/products/category/${categoria}`);
  }
}
