import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Descripcion, Producto } from './Interfaces/Productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }

  getAllPromise(buscar:string):Promise<Producto>{
    return lastValueFrom(this.http.get<Producto>(`https://api.mercadolibre.com/sites/MLA/search?q=${buscar}`))
  }

  getById(id:string):Promise<Producto>{
    return lastValueFrom(this.http.get<Producto>(`https://api.mercadolibre.com/items/${id}`))
  }

  getDescriptionById(id:string):Promise<Descripcion>{
    return lastValueFrom(this.http.get<Descripcion>(`https://api.mercadolibre.com/items/${id}/description`))
  }
}
