import { Component, OnInit } from '@angular/core';
import { ContractService } from '../contract.service';

@Component({
  selector: 'app-cancel-product',
  templateUrl: './cancel-product.component.html',
  styleUrls: ['./cancel-product.component.scss']
})
export class CancelProductComponent implements OnInit {

  constructor(private e:ContractService) { }
   public prod1_id

  cancelProduct(){
    console.log(this.prod1_id)
    this.e.CancelProduct(this.prod1_id);

  }

  ngOnInit() {
  }

}
