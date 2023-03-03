import { Component } from '@angular/core';
import { Producto } from 'src/app/Interfaces/Productos';
import { ProductosService } from '../../productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    productos!:Producto []
    buscar="samsung"
    constructor(private productosServices:ProductosService){
      this.init()
    }

    async init(){
      const response:any = await this.productosServices.getAllPromise(this.buscar)
      this.productos= response.results
    }

    busqueda(){
      this.init()
    }

}
