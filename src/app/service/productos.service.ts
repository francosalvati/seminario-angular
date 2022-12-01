import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ProductosComponent } from '../home/productos/productos.component';
import { Producto } from '../interfaces/producto';

const URL = 'https://632dd332519d17fb53c7427c.mockapi.io/producto'

@Injectable({
  providedIn: 'root'
})


export class ProductosService {


  constructor(private http: HttpClient) { }

  getAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(URL)
      .pipe(
        tap((productos: Producto[]) => productos.forEach(producto => producto.quantity = 0)
      ));
  }

  getOne(id:string): Observable<Producto>{
    return this.http.get<Producto>(`${URL}/${id}`);
  }

  delete(id:string){
    this.http.delete<void>(`${URL}/${id}`)
  }

  add(producto:Producto):Observable<Producto>{
    const body = {nombre: producto.nombre}
    return this.http.post<Producto>(URL, body)
  }

  update(producto:Producto):Observable<void>{
    const body = {nombre: producto.nombre}
    return this.http.put<void>(`${URL}/${producto.id}`, body);
  }
}
