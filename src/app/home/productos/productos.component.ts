import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Producto } from 'src/app/interfaces/producto';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { ProductosService } from 'src/app/service/productos.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productosService: ProductosService,
    private cartService: CartServiceService,
    private _snackBar: MatSnackBar,
    private _bottomSheet: MatBottomSheet) { }


  ngOnInit(): void {
    this.productosService.getAll().subscribe(productos => this.productos = productos);
  }

  enviarCarrito(producto: Producto): void {
    this.cartService.addToCart(producto);
    producto.stock -= producto.quantity;
    producto.quantity = 0;
  }

}
