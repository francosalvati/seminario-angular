import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarritoComponent } from './home/carrito/carrito.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ProductosComponent } from './home/productos/productos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InputIntComponent } from './home/productos/input-int/input-int.component';
import { BienvenidosComponent } from './home/bienvenidos/bienvenidos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarritoComponent,
    ProductosComponent,
    InputIntComponent,
    BienvenidosComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
