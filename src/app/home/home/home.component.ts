import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private _bottomSheet:MatBottomSheet ) { }

  ngOnInit(): void {
  }
  openBottomSheet(): void {
    this._bottomSheet.open(CarritoComponent);
  }
}
