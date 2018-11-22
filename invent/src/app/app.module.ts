import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductComponent } from './addproduct/addproduct.component';
// import { GetProductComponent } from './get-product/get-product.component';
import { ContractService } from './contract.service';

import { GetComponent } from './get/get.component';
import browserr from './browser';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { RegOntIdComponent } from './reg-ont-id/reg-ont-id.component';
import { OrderProductComponent } from './order-product/order-product.component';
import { CancelOrderComponent } from './cancel-order/cancel-order.component';
import { CancelProductComponent } from './cancel-product/cancel-product.component';
import { GetOrderDetailsComponent } from './get-order-details/get-order-details.component'
@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    GetComponent,
    UpdateProductsComponent,
    RegOntIdComponent,
    OrderProductComponent,
    CancelOrderComponent,
    CancelProductComponent,
    GetOrderDetailsComponent
    // GetProductComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ContractService,browserr],
  bootstrap: [AppComponent]
})
export class AppModule { }
