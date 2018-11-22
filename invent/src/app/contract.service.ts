import { Injectable } from '@angular/core';
import { GetComponent } from './get/get.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { RegOntIdComponent } from './reg-ont-id/reg-ont-id.component';
import { OrderProductComponent } from './order-product/order-product.component';
import { CancelOrderComponent } from './cancel-order/cancel-order.component';
import { CancelProductComponent } from './cancel-product/cancel-product.component';
// import { } from '@angular/core';





// declare let require:any;
//  var browserr= require('./browser.js')
 import browserr from './browser'
// import { Address } from 'cluster';
// import { pseudoRandomBytes } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  // privat5
  // s1
  // from
  // to
  // amount
  // assetType
  // gasPrice
  // gasLimit
  // payer
  // name
  pk_id
  g3
  test
  pkI
  p_quant
  p_pric
  ontId
  p_id2
  c_id2
  p_name2
  p_quant2
  wif1 
  p_id3
  o_id3
  c_id3
  prod_id4
  prod_id5

  constructor(private s:browserr) { }

//    unpack(g1) {
//      console.log("process"+g1)
//     this.test = [];
//     console.log('ss')
    
  
//   for(var i = 0; i < g1.length; i++) {
//       var char = g1.charCodeAt(i);
//       this.test.push(char >>> 8);
//      this. test.push(char & 0xFF);
//   }
  
//   console.log(typeof(this.test));
// }



public s1= 'L3duZU71BfrAHwNTffWQzSPrc2n9rVXnhx3As2Q9xVLSPb11vuTc';
public privat5 = this.s.Crypto.PrivateKey.deserializeWIF(this.s1)
public from = new this.s.Crypto.Address('ANSdDAN2r2HNFawckYi12xXsZY2aNkyVdH')
  
  //  console.log( this. privat5 ) 
   //Receiver's address
   public to = new this.s.Crypto.Address('AXJFA9quEdQ4uZHv47Y5nCxiJfs5hAynYx') //AXJFA9quEdQ4uZHv47Y5nCxiJfs5hAynYx,  AMa2ytW688ZVxLdbiH4qpP5DYfd4WckTsF
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
  public rest9 = new this.s.RestClient('http://polaris1.ont.io:20334');
   
  sample(pkid)
  {

    this.pk_id=Number(pkid);
    console.log("pkid",this.pk_id)
    console.log(typeof(this.pk_id));
  //  this.pk_id1=pk_id;
  //  this.unpack(this.pk_id1);
    
  //  const p2 = new browserr.Parameter('name', browserr.ParameterType.String,this.pk_name);

   
  //  console.log(this.bytes);
   var g1 = new this.s.Parameter('pk_id', this.s.ParameterType.BigInteger,Number(this.pk_id));
   console.log(this.s.ParameterType);
   console.log(typeof(this.pk_id));
   console.log(g1)




   const tx7 =  this.s.invokeRead( { scriptHash: '5a41af968ce19ef56d5f30bb26fd03703c60178a', operation: 'get_p_details', args: [g1] });


  // //  this.g3=bytes(this.pk_id1);
  
  //     const tx7 = this.s.TransactionBuilder.makeInvokeTransaction("get_p_details",[g1], 
  //     // const result = await client.api.smartContract.invokeRead({ contract, method, parameters });
  //     // const tx7 = this.rest9.invokeRead('5a41af968ce19ef56d5f30bb26fd03703c60178a',"get_p_details", g1)

  //      new this.s.Crypto.Address(this.s.utils.reverseHex('5a41af968ce19ef56d5f30bb26fd03703c60178a')),//b9d6d8c12ac9089d01a83eb8d419cde4136edd6f  
  //      String(this.gasPrice),
  //      String(this.gasLimit)
  // );








       
       console.log(typeof(this.pk_id))
       console.log("get",tx7);
       // console.log( browserr.accountt.address);
       
   tx7.payer.value = this.from.value;//browserr.accountt.address;
   console.log(this.from)
   console.log(this.privat5.key);

  //  const st3 = this.s.TransactionBuilder.signTransaction(tx7,this.privat5);
  //  console.log("signT",st3)
   
  //  console.log("Signed ", tx7);
  //const rest9 = new this.s.RestClient('http://polaris1.ont.io:20334');

  // const st20 = this.s.gettransaction("5a41af968ce19ef56d5f30bb26fd03703c60178a",this.privat5);
  // console.log("signT",st20)

  // const network = this.s.network.getNetwork();
  // console.log(network)
  


   

  this.rest9.getStorage("5a41af968ce19ef56d5f30bb26fd03703c60178a",'437573746f6d65725f49645f4e756d626572').then(res1 =>{
    console.log(res1)
    console.log(this.rest9.getbestblockhash());

  });
}
    

  //   this.rest9.gettransaction("5a41af968ce19ef56d5f30bb26fd03703c60178a").then(res2 =>{
  //     console.log(res2)



  //     function getRawTransaction(txHash) {
  //       const param = {
  //           Action: 'gettransaction',
  //           Version: '1.0.0',
  //           Hash: txHash,
  //           Raw: '1'
  //       };
  //       return param;

  // // })
  // // this.rest9.sendRawTransaction(tx7.serialize()).then(res => {
  // //   console.log("get product",res)
  // //   console.log('succeed')
  //     


// var a= {
//   "jsonrpc": "2.0",
//   "method": "invokescript",
//   "params":[],
//   "id": 1
// }

//      this.rest9.getbestblockhash().then(res3 =>{
//     console.log(res3);
   
    
//   })



  



  //  console.log('success')
  //  const ss="bac23ec8caba7b8b9d321a222de956231b173a48ddd7110b8ed3dca9d88f9a47"
   





     


  


  update(pId,pk_quantt,pk_pricee)
  {
   
    // this.pkI=Number(pId);
    this.p_quant=Number(pk_quantt);
    this.p_pric=Number(pk_pricee);



    var u1 = new this.s.Parameter('pk_id', this.s.ParameterType.BigInteger,Number(pId));
    var u2 = new this.s.Parameter('pk_quant', this.s.ParameterType.BigInteger,Number(this.p_quant));
    var u3 = new this.s.Parameter('pk_price', this.s.ParameterType.BigInteger,Number(this.p_pric));

    console.log(this.s.ParameterType);
    console.log(typeof(this.pkI));
    console.log(u1)
    console.log(u2)
    console.log(u3)
   // //  this.g3=bytes(this.pk_id1);
   
       const tx9 = this.s.TransactionBuilder.makeInvokeTransaction("update_Product",[u1,u2,u3], 
        new this.s.Crypto.Address(this.s.utils.reverseHex('5a41af968ce19ef56d5f30bb26fd03703c60178a')),//b9d6d8c12ac9089d01a83eb8d419cde4136edd6f   
        String(this.gasPrice),
        String(this.gasLimit)
       
        );
        
        console.log("up",tx9);
        // console.log( browserr.accountt.address);
        
    tx9.payer.value = this.from.value;//browserr.accountt.address;
    console.log(this.from)
    console.log(this.privat5.key);
 
    const st5 = this.s.TransactionBuilder.signTransaction(tx9,this.privat5);
    console.log("signTrans",st5)
    
    console.log("SignedTrans ", tx9);
    // const rest11= new this.s.RestClient('http://polaris1.ont.io:20334');
    console.log('success1')
    this.rest9.sendRawTransaction(tx9.serialize()).then(res => {
       console.log("update product",res)
 
 
       })
 
 
   }

   register(ontid,wif) //ontid =>  "did:ont:AQvdBVY7AzQzinaTWWBm66AFyyYLeQd2ox"
   {
     this.ontId=String(ontid)
    //  this.wif1=String(wif);
     console.log(this.wif1);
    
    //  var s2= 'L3duZU71BfrAHwNTffWQzSPrc2n9rVXnhx3As2Q9xVLSPb11vuTc'// particular acc WIF
  console.log("WIF")
  const privat6 = this.s.Crypto.PrivateKey.deserializeWIF(wif)
   console.log("privatekey1")
   console.log(privat6)
   const pk = privat6.getPublicKey();
   console.log(pk)
  

     const tx1 = this.s.OntidContract.buildRegisterOntidTx(this.ontId,pk,this.gasPrice,this.gasLimit,this.payer);
     console.log('TX!',tx1);

     const w1 = new this.s.Parameter('ontid', this.s.ParameterType.String,this.ontId);
     console.log(this.s.ParameterType);
     console.log(typeof(this.ontId));
     console.log("w1"+w1)
    
     const tx11 = this.s.TransactionBuilder.makeInvokeTransaction("register_OntID",[w1], 
     new this.s.Crypto.Address(this.s.utils.reverseHex('5a41af968ce19ef56d5f30bb26fd03703c60178a')),//b9d6d8c12ac9089d01a83eb8d419cde4136edd6f
             
         String(this.gasPrice),
         String(this.gasLimit)
        
         );
       console.log("up",tx11);
         // console.log( browserr.accountt.address);
         
     tx11.payer.value = this.from.value;//browserr.accountt.address;
     console.log('from',this.from)
     console.log('key',this.privat5.key);
  
     const st7 = this.s.TransactionBuilder.signTransaction(tx11,this.privat5);
     console.log("signTransaction",st7)
     
     console.log("SignedTransaction.. ", tx11);
    //  const rest13 = new this.s.RestClient('http://polaris1.ont.io:20334');
     console.log('success2')
     this.rest9.sendRawTransaction(tx11.serialize()).then(res => {
        console.log("regiseterOnt id",res)
     

        })
   }


  order(pId1,c_id,prodName,produ_quantt)
  {
   this.p_id2=Number(pId1)
    this.c_id2=Number(c_id)
    this.p_name2=String(prodName)
    this.p_quant2=Number(produ_quantt)

   
    var q1 = new this.s.Parameter('pk_id', this.s.ParameterType.BigInteger,Number(this.p_id2));
    var q2 = new this.s.Parameter('c_id', this.s.ParameterType.BigInteger,Number(this.c_id2));
    var q3 = new this.s.Parameter('pk_name', this.s.ParameterType.String,this.p_name2);
    var q4 = new this.s.Parameter('pk_quant', this.s.ParameterType.BigInteger,Number(this.p_quant2));


    console.log(this.s.ParameterType);
    console.log(typeof(this.p_id2));
    console.log(q1)
    console.log(q2)
    console.log(q3)
    console.log(q4)
   // //  this.g3=bytes(this.pk_id1);
   
       const tx13 = this.s.TransactionBuilder.makeInvokeTransaction("o_details",[q1,q2,q3,q4], 
        new this.s.Crypto.Address(this.s.utils.reverseHex('5a41af968ce19ef56d5f30bb26fd03703c60178a')),//b9d6d8c12ac9089d01a83eb8d419cde4136edd6f   
        String(this.gasPrice),
        String(this.gasLimit)
       
        );
        
        console.log("ord",tx13);
        // console.log( browserr.accountt.address);
        
    tx13.payer.value = this.from.value;//browserr.accountt.address;
    console.log(this.from)
    console.log(this.privat5.key);
 
    const st9 = this.s.TransactionBuilder.signTransaction(tx13,this.privat5);
    console.log("signTrans",st9)
    
    console.log("SignedTrans ", tx13);
    // const rest15 = new this.s.RestClient('http://polaris1.ont.io:20334');
    console.log('success1')
    this.rest9.sendRawTransaction(tx13.serialize()).then(res => {
       console.log("order product",res)
      // rest9.getTransactionReceipt(res).then(res1 => {
      //   console.log(res1)
      // })
     

       })
       

  }



  CancelOrder(product_id,order_id,customer_id)
  {
   this.p_id3=Number(product_id)
   this.o_id3=Number(order_id)
   this.c_id3=Number(customer_id)

   var o1 = new this.s.Parameter('pk_id', this.s.ParameterType.BigInteger,Number(this.p_id3));
    var o2 = new this.s.Parameter('o_id', this.s.ParameterType.BigInteger,Number(this.o_id3));
 
    var o3 = new this.s.Parameter('c_id', this.s.ParameterType.BigInteger,Number(this.c_id3));

    const tx15 = this.s.TransactionBuilder.makeInvokeTransaction("cancel_order",[o1,o2,o3], 
        new this.s.Crypto.Address(this.s.utils.reverseHex('5a41af968ce19ef56d5f30bb26fd03703c60178a')),//b9d6d8c12ac9089d01a83eb8d419cde4136edd6f   
        String(this.gasPrice),
        String(this.gasLimit)
       
        );
        
        console.log("cancel",tx15);
        // console.log( browserr.accountt.address);
        
    tx15.payer.value = this.from.value;//browserr.accountt.address;
    console.log(this.from)
    console.log(this.privat5.key);
 
    const st11 = this.s.TransactionBuilder.signTransaction(tx15,this.privat5);
    console.log("signTrans",st11)
    
    console.log("SignedTrans ", tx15);
    // const rest15 = new this.s.RestClient('http://polaris1.ont.io:20334');
    console.log('success1')
    this.rest9.sendRawTransaction(tx15.serialize()).then(res => {
       console.log("cancel oder",res)
      // rest9.getTransactionReceipt(res).then(res1 => {
      //   console.log(res1)
      // })
     

       })
  }

  CancelProduct(prod1_id){

    this.prod_id4 =Number(prod1_id)
    var z = new this.s.Parameter('pk_id', this.s.ParameterType.BigInteger,Number(this.prod_id4));

    const tx17 = this.s.TransactionBuilder.makeInvokeTransaction("cancel_Product",[z], 
    new this.s.Crypto.Address(this.s.utils.reverseHex('5a41af968ce19ef56d5f30bb26fd03703c60178a')),//b9d6d8c12ac9089d01a83eb8d419cde4136edd6f   
    String(this.gasPrice),
    String(this.gasLimit)
   
    );
    
    console.log("cancel1l",tx17);
    // console.log( browserr.accountt.address);
    
tx17.payer.value = this.from.value;//browserr.accountt.address;
console.log(this.from)
console.log(this.privat5.key);

const st13 = this.s.TransactionBuilder.signTransaction(tx17,this.privat5);
console.log("signTrans",st13)

console.log("SignedTrans ", tx17);
// const rest15 = new this.s.RestClient('http://polaris1.ont.io:20334');
console.log('success1')
this.rest9.sendRawTransaction(tx17.serialize()).then(res => {
   console.log("cancel product",res)
  // rest9.getTransactionReceipt(res).then(res1 => {
  //   console.log(res1)
  // })
 

   })
  }   
  getOrderD(prod2_id)
  {

    this.prod_id5=Number(prod2_id)

    var z1 = new this.s.Parameter('pk_id', this.s.ParameterType.BigInteger,Number(this.prod_id5));

    const tx19 = this.s.TransactionBuilder.makeInvokeTransaction("get_o_details",[z1], 
    new this.s.Crypto.Address(this.s.utils.reverseHex('5a41af968ce19ef56d5f30bb26fd03703c60178a')),//b9d6d8c12ac9089d01a83eb8d419cde4136edd6f   
    String(this.gasPrice),
    String(this.gasLimit)
   
    );
    
    console.log("cancel12",tx19);
    // console.log( browserr.accountt.address);
    
tx19.payer.value = this.from.value;//browserr.accountt.address;
console.log(this.from)
console.log(this.privat5.key);

const st15 = this.s.TransactionBuilder.signTransaction(tx19,this.privat5);
console.log("signTrans",st15)

console.log("SignedTrans ", tx19);
// const rest15 = new this.s.RestClient('http://polaris1.ont.io:20334');
console.log('success1')
this.rest9.sendRawTransaction(tx19.serialize()).then(res => {
   console.log("getproduct Details",res)
  // rest9.getTransactionReceipt(res).then(res1 => {
  //   console.log(res1)
  // })
 

   })


  }




  }








