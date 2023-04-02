import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataType } from '../data-type';
@Injectable({
  providedIn: 'root'
})
export class MyServService {

  constructor(private http:HttpClient) { }
  getRoleData(){
    return this.http.get<DataType>('https://cmi-ofm.azurewebsites.net/api/User/Client/1/Role')
  }
}
