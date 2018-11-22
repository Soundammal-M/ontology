import { Component, OnInit } from '@angular/core';
declare let require:any;
// declare let browser:any;
 var browserr= require('../browser.js')
declare let Ont:any;
// Ont = browser.Ont;
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  constructor() {
    // let new_obj = new browser();
    console.log("browserr");
    console.log(browserr.Crypto.KeyType.ECDSA);
   
    // console.log(JSON.parse((browserr.SDK.importAccountWithWif("MY_WALLET",this.s1,"12345")).result));
    
    // console.log(browserr.ParameterType.String)

    // console.log("accPrivatekey"+this.privat5);
    // console.log('reverse'+this.rev);
        
   }



  //  public keyType = browserr.Crypto.KeyType.ECDSA;
  //  public keyParameters = new browserr.Crypto.KeyParameters(browserr.Crypto.CurveLabel.SECP256R1);
  // //  public privateKey; //= browserr.Crypto.PrivateKey.random(this.keyType,this.keyParameters);
   
   
   
   public s1= 'L3duZU71BfrAHwNTffWQzSPrc2n9rVXnhx3As2Q9xVLSPb11vuTc';// particular acc WIF

   public privat5 = browserr.Crypto.PrivateKey.deserializeWIF(this.s1)
  
  
 
   
  //  public accountt=JSON.parse((browserr.SDK.importAccountWithWif("MY_WALLET",this.s1,"12345")).result);

  // //  public rev= browserr.utills.reverseHex('b27f34b1384756b348b43ee4981c18336c167add59099fff73cc6276f093c893');
 
   
   
   
  // // //  public s2=this.accountt.address;
  // // // //  console.log(s2);
   
  // // //  // const address1 = new Ont.Crypto.Address(s2);
  // // //  // const nodeUrl = 'http://polaris1.ont.io:20334' // Testnet
  // // //  // const rest = new Ont.RestClient(nodeUrl); // Query the balance on testnet
  // // //  // rest.getBalance(address1).then(res => {
  // // //  // 	console.log(res)
  
  // // //  // })
  
  
  
   public from = new browserr.Crypto.Address('ANSdDAN2r2HNFawckYi12xXsZY2aNkyVdH')//('AXJFA9quEdQ4uZHv47Y5nCxiJfs5hAynYx')// b9d6d8c12ac9089d01a83eb8d419cde4136edd6f
  //Receiver's address
  public to = new browserr.Crypto.Address('AXJFA9quEdQ4uZHv47Y5nCxiJfs5hAynYx') //AXJFA9quEdQ4uZHv47Y5nCxiJfs5hAynYx,  AMa2ytW688ZVxLdbiH4qpP5DYfd4WckTsF
  //Amount to send
  public amount = 1
  //Asset type
  public assetType = 'ONT'
  //Gas price and gas limit are to compute the gas costs of the transaction.
  public gasPrice = '500';
  public gasLimit = '20000';
  //Payer's address to pay for the transaction gas
  public payer = this.from;
  public name='sandhiya'
      


  public pk_name:string;
  public pk_brand:string;
  public pk_quant: number;
  public pk_price: number;

   AddProducts()
    {
      console.log(("privateee"+this.privat5)) 
      
  //     // var name=document.getElementById("pk_name").value.trim();
  //     // var brand=document.getElementById("pk_brand").value.trim();
  //     // var quantity=parseInt(document.getElementById("pk_quant").value.trim());
  //     // var price=parseInt(document.getElementById("pk_price").value.trim());
    
    
    console.log(this.pk_name,this.pk_brand,this.pk_quant,this.pk_price);
    const p2 = new browserr.Parameter('name', browserr.ParameterType.String,this.pk_name);
    console.log(p2)
    console.log(typeof(this.pk_quant));
    const p3 = new browserr.Parameter('brand',browserr.ParameterType.String, this.pk_brand);
    console.log(typeof(this.pk_quant));
    const p4 = new browserr.Parameter('quantity',browserr.ParameterType.BigInteger,Number(this.pk_quant));
    const p5 = new browserr.Parameter('price',browserr.ParameterType.BigInteger,Number(this.pk_price));
    
    
    const tx5 = browserr.TransactionBuilder.makeInvokeTransaction("p_details",[p2,p3,p4,p5], 
        new browserr.Crypto.Address(browserr.utils.reverseHex('5a41af968ce19ef56d5f30bb26fd03703c60178a')),
        
        String(this.gasPrice),
        String(this.gasLimit)
       
        );
        console.log("check",tx5);
        // console.log( browserr.accountt.address);
        
    tx5.payer.value = this.from.value;//browserr.accountt.address;
    console.log(this.from)
    console.log(this.privat5.key);
 
    const st1 = browserr.TransactionBuilder.signTransaction(tx5,this.privat5);
    console.log("signT",st1)
    
    console.log("Signed ", tx5);
    const rest7 = new browserr.RestClient('http://polaris1.ont.io:20334');
    rest7.sendRawTransaction(tx5.serialize()).then(res => {
       console.log("add product",res)


       })
    }

  ngOnInit() {
  }

}
