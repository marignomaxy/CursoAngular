import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Descripcion, Producto, ProductoCompleto } from 'src/app/Interfaces/Productos';
import { ProductosService } from 'src/app/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  id:string
  producto!:ProductoCompleto
  constructor(
    private activateRoutes:ActivatedRoute,
    private productoService:ProductosService
  ){
    this.id = this.activateRoutes.snapshot.paramMap.get("id") || ""
    this.init()
  }
  async init(){
    try{
      const response:Producto = await this.productoService.getById(this.id)
      const description:Descripcion = await this.productoService.getDescriptionById(this.id)
      this.producto={detalle:response,descripcion:description}
    }catch(e){
      console.log(e)
    }
  }

}
