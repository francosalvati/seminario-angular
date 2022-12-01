import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  shopList: Producto[] = [];

  constructor() { }


  addToCart(producto:Producto){
    let carrito: Producto | undefined = this.shopList.find((v1) => v1.nombre == producto.nombre);
    if(!carrito){
      this.shopList.push({... producto});
    }else{
      carrito.quantity += producto.quantity
    }
  }
}

