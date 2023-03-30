import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyServService {

  constructor(private http:HttpClient) { }
  getRoleData(){
    return this.http.get('https://cmi-ofm.azurewebsites.net/api/User/Client/1/Role')
  }
}
