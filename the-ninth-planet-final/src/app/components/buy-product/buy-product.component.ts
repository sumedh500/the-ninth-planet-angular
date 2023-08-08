import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CreateItemService } from 'src/app/service/create-item.service';
import * as jquery from 'jquery'
@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.scss']
})
export class BuyProductComponent implements OnInit{
  image: any;
  addForm!:FormGroup
  PAYMENT_BASE_URL = 'https://securegw-stage.paytm.in/theia/processTransaction'
  // txn_url = "https://securegw-stage.paytm.in/theia/processTransaction"; // for staging
          // var txn_url = "https://securegw.paytm.in/theia/processTransaction"; // for production
  constructor(private router : ActivatedRoute,private fb: FormBuilder,private payment:CreateItemService){ 
    this.addForm = this.fb.group({
      amount:new FormControl('100'),
      name:new FormControl(''),
      email:new FormControl(''),
      phone:new FormControl(''),
      street:new FormControl(''),
      city:new FormControl(''),
      state:new FormControl(''),
      pincode:new FormControl(''),
      deliverytype:new FormControl(''),
    })
   }
  ngOnInit(): void {
    this.router.queryParams.subscribe(data=>{
      console.log(data)
      // this.addForm.patchValue({
      //   amount:data['price']
      // })
      this.image = data['image']
      console.log(this.addForm.value)
    })
  }
  pay(){
    console.log(this.addForm.value)
    this.payment.payment(this.addForm.value).subscribe(response=>{
      console.log(response)
      jquery("#CALLBACK_URL").val(response.CALLBACK_URL);
      jquery("#CHANNEL_ID").val(response.CHANNEL_ID);
      jquery("#CHECKSUMHASH").val(response.CHECKSUMHASH);
      jquery("#CUST_ID").val(response.CUST_ID);
      jquery("#EMAIL").val(response.EMAIL);
      jquery("#INDUSTRY_TYPE_ID").val(response.INDUSTRY_TYPE_ID);
      jquery("#MID").val(response.MID);
      jquery("#MOBILE_NO").val(response.MOBILE_NO);
      jquery("#ORDER_ID").val(response.ORDER_ID);
      jquery("#TXN_AMOUNT").val(response.TXN_AMOUNT);
      jquery("#WEBSITE").val(response.WEBSITE)
      jquery("#payment-form").trigger('submit');
    })
  }
}
