import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
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
              private cartService: CartServiceService,){ }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }



  ngOnInit(): void {
    this.shopList = this.cartService.shopList;
  }



}
