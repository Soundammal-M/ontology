import { Component, OnInit } from '@angular/core';
// declare let require:any;
// var browserr1= require('../browser.js')
// declare let Ont:any;
import { ContractService } from '../contract.service';
@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss']
})
export class GetComponent implements OnInit {
s
d
  constructor(private e: ContractService) {console.log(this.s)  }
  public pk_id

  getProduct()
  {
    // console.log(this.pk_id)

  this.e.sample(this.pk_id);
  }


  ngOnInit() {
   }
 

}
