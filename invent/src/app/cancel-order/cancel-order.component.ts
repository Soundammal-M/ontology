import { Component, OnInit } from '@angular/core';
import{ContractService}from '../contract.service';

@Component({
  selector: 'app-cancel-order',
  templateUrl: './cancel-order.component.html',
  styleUrls: ['./cancel-order.component.scss']
})
export class CancelOrderComponent implements OnInit {

  constructor(private e:ContractService) { }
 public product_id
 public order_id
 public customer_id





  cancelOrder()
  {

    console.log(this.product_id,this.order_id,this.customer_id)
    this.e.CancelOrder(this.product_id,this.order_id,this.customer_id);

  }





  ngOnInit() {
  }

}
