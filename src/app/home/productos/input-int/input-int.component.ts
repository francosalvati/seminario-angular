import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-input-int',
  templateUrl: './input-int.component.html',
  styleUrls: ['./input-int.component.css']
})
export class InputIntComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

  @Input() producto !: Producto;

  ngOnInit(): void {
  }

  downQuantity(producto: Producto) {
    if (producto.quantity <= producto.stock && producto.quantity > 0) {
      producto.quantity--;
    }
  }

  upQuantity(producto: Producto) {
    if (producto.quantity < producto.stock && producto.quantity > -1) {
      producto.quantity++;
    }

    else if(producto.quantity == producto.stock){
      this._snackBar.open('Stock Insuficiente', 'ok', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    }


  }

  verificar(producto: Producto) {
    if (producto.quantity > producto.stock || producto.quantity < 0 || isNaN(producto.quantity)) {
      producto.quantity = 0
      this._snackBar.open('Stock Insuficiente', 'ok', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    }
  }
}
