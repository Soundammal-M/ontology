import { Component, OnInit } from '@angular/core';
import { ContractService } from '../contract.service';

@Component({
  selector: 'app-get-order-details',
  templateUrl: './get-order-details.component.html',
  styleUrls: ['./get-order-details.component.scss']
})
export class GetOrderDetailsComponent implements OnInit {
  public prod2_id

  constructor(private e:ContractService) { }

  getOrder()
  {
    console.log(this.prod2_id)
    this.e.getOrderD(this.prod2_id);

  }

  ngOnInit() {
  }

}
