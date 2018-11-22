import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { GetComponent } from './get/get.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { RegOntIdComponent } from './reg-ont-id/reg-ont-id.component';
import { OrderProductComponent } from './order-product/order-product.component';

import { CancelOrderComponent } from './cancel-order/cancel-order.component';
import { CancelProductComponent } from './cancel-product/cancel-product.component'

import { GetOrderDetailsComponent } from './get-order-details/get-order-details.component';

const routes: Routes = [
  {
      path: 'addProduct',
      component: AddproductComponent
    },

    {
      path: 'GetComponent',
      component: GetComponent
      
    },

    {
      path: 'updateComponent',
      component: UpdateProductsComponent
      
    },

    {
      path: 'registeront',
      component: RegOntIdComponent
      
    },
    {
      path: 'orderProduct',
      component: OrderProductComponent
      
    },

    {
      path: 'cancelorder',
      component: CancelOrderComponent
      
    },


    {
      path: 'cancelProdct',
      component: CancelProductComponent
      
    },
    {
      path: 'getOrder',
      component: GetOrderDetailsComponent
      
    },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
