import { Component, OnInit } from '@angular/core';
import { ContractService } from '../contract.service';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.scss']
})
export class OrderProductComponent implements OnInit {
 public pId1:Number
 public c_id:Number
 public prodName:String
 public produ_quantt:Number
  constructor(private e:ContractService) { }
  orderProducts()
  {
    console.log(this.pId1,this.c_id,this.prodName,this.produ_quantt)
    this.e.order(this.pId1,this.c_id,this.prodName,this.produ_quantt)

  }

  ngOnInit() {
  }

}
