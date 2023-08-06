import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { host } from '../host';

@Injectable({
  providedIn: 'root'
})
export class CreateItemService {
  host = host
  constructor(private http: HttpClient) { }

  createItem(item:any):Observable<any>{
    return  this.http.post(`${host}/itemcreate`,item)
  }

  getallitem():Observable<any>{
    return  this.http.get(`${host}/getallitem`)
  }

  DeleteItem(id:any):Observable<any>{
    return  this.http.delete(`${host}/deleteitem/${id}`)
  }

  getItemById(id:any):Observable<any>{
    return  this.http.get(`${host}/getitembyid/`+id)
  }
  
}
