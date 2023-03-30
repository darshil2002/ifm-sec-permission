import { Component } from '@angular/core';
import { pluck } from 'rxjs';
import { MyServService } from './allserv/my-serv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secRole';

  constructor(private myser:MyServService){}

  ngOnInit(){
    console.log('this')
    this.myser.getRoleData().pipe(pluck('role')).subscribe(res=>{
      console.log(res);
    })
  }
}
