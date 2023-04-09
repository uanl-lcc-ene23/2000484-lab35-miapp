import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../consultas.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: any[] = [];

  constructor(private consultasService: ConsultasService) {}

  ngOnInit() {
    this.consultasService.getProductos()
      .subscribe((resp: Object) => {
        console.log(resp);
        this.productos = resp as any[];
    });
  }
}
