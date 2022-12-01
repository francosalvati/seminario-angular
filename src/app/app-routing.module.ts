import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './home/carrito/carrito.component';
import { HomeComponent } from './home/home/home.component';
import { ProductosComponent } from './home/productos/productos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path:'',
        component:ProductosComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
