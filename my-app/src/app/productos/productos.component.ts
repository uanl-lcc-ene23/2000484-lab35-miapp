import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../consultas.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private consultas: ConsultasService) {}

  productos: any = [];
  categorias: any = [];

  ngOnInit(): void {
    this.obtenerProductos();

    this.obtenerCategorias();
    this.filtarProducto();
  }

  ngOnChanges(): void{
   //  this.productos = []; 
   console.log(this.productos);
  }


  obtenerProductos() {
    this.consultas.getProductos().subscribe(res => {
      this.productos = res;
    });
  }

    obtenerCategorias(){
      this.consultas.getCategorias().subscribe(res => {
        this.categorias = res;
      })
    }

    filtarProducto(){
      this.consultas.getProducto().subscribe(res=> {
        console.log(res);
      })
    }


    categoria: string ="";  
    filtrarProductoCategorias(ev: any){
      console.log(ev);
      //this.categoria= ev.target.value;
      console.log(ev);
      this.consultas.getProductPorCategoria().subscribe(res =>{
        this.productos = res;
      })
    }

}
