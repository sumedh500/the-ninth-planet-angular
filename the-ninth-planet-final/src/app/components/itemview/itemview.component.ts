import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateItemService } from 'src/app/service/create-item.service';

@Component({
  selector: 'app-itemview',
  templateUrl: './itemview.component.html',
  styleUrls: ['./itemview.component.scss']
})
export class ItemviewComponent implements  OnInit{
  product: any;

  constructor(private router : ActivatedRoute,private adminService:CreateItemService,){}

  ngOnInit(): void {
    // this.spinner.show();

    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.spinner.hide();
    // }, 5000);
    this.router.paramMap.subscribe(data=>{
      var id = data.get("id")
      this.adminService.getItemById(id).subscribe(data=>{
        console.log(data)
        this.product=data.data
      })
    })
  }

}
