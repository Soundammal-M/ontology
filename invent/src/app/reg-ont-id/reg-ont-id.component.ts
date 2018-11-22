import { Component, OnInit } from '@angular/core';
import { ContractService } from '../contract.service';


@Component({
  selector: 'app-reg-ont-id',
  templateUrl: './reg-ont-id.component.html',
  styleUrls: ['./reg-ont-id.component.scss']
})
export class RegOntIdComponent implements OnInit {
  
  constructor(private e:ContractService) { }
  public ontid
  public wif

  registerOnt()
  {
    console.log(this.ontid,this.wif)
    this.e.register(this.ontid,this.wif);

  }

  ngOnInit() {
  }

}
