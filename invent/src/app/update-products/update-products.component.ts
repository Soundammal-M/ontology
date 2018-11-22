import { Component, OnInit } from '@angular/core';
import { ContractService } from '../contract.service';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.scss']
})
export class UpdateProductsComponent implements OnInit {

  m
  d
    constructor(private e: ContractService) {console.log(this.m)  }
    public pId
    public pk_quantt
    public pk_pricee
  
    updateProducts()
    {
      // console.log(this.pk_id)
      console.log(this.pId,this.pk_quantt,this.pk_pricee);
  
    this.e.update(this.pId,this.pk_quantt,this.pk_pricee);
    }
  

  ngOnInit() {
  }

}
