import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { CreateItemService } from 'src/app/service/create-item.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss']
})
export class ItemCreateComponent implements OnInit  {
  addForm!:FormGroup
  dataSource: any;
  Item: unknown[] | undefined;
  displayedColumns: string[] = [
    'image',
    'name',
    'description',
    'price',
    'brand',
    'category',
    'stock',
  ];
  constructor(private fb: FormBuilder,private itemService:CreateItemService){
    this.addForm = this.fb.group({
      image: new FormControl(),
      id: new FormControl(),
      name: new FormControl(),
      description: new FormControl(),
      price: new FormControl(),
      currency: new FormControl(),
      brand: new FormControl(),
      category: new FormControl(),
      stock: new FormControl(),
      rating: new FormControl(),  // Optional property
      reviews: new FormControl(), // Optional property
    })
  }

  ngOnInit(): void {
    this.getAllItem()
  }
  click(){
      console.log(this.addForm.value)
    this.itemService.createItem(this.addForm.value).subscribe(data=>{
      console.log(data)
      if(data.result === 'success'){
        this.addForm.reset()
        this.getAllItem()
        alert("created successfully")
      }
    })
  } 
  getAllItem(){
    this.itemService.getallitem().subscribe(data=>{
      console.log(data)
      this.dataSource = new MatTableDataSource(data.data);
    })
  }

  deleteItem(id:any){
    console.log(id)
    this.itemService.DeleteItem(id).subscribe(data=>{
      console.log(data)
      alert(`${data.data.name} successfully deleted`)
      this.getAllItem()
    })
  }

  edit(data:any){
    
  }
}
