import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Producto } from 'src/app/interfaces/producto';
import { CartServiceService } from 'src/app/service/cart-service.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent implements OnInit {

  showFiller = false;

  shopList:Producto[] = [];


  constructor(private _bottomSheetRef: MatBottomSheetRef<CarritoComponent>,
              private cartService: CartServiceService,
              private _snackBar: MatSnackBar){ }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit(): void {
    this.shopList = this.cartService.shopList;
  }

  comprar(event:MouseEvent){
    this.cartService.compra();
    this._snackBar.open('Compra realizada', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
    this.openLink(event);
  }

}
