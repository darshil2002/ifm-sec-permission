import { Component, OnInit } from '@angular/core';
import { pluck } from 'rxjs';
import { MyServService } from './allserv/my-serv.service';
import { DataType, Role } from './data-type';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ListItem } from 'ng-multiselect-dropdown/multiselect.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'secRole';

  roleArray: Role[] = [];
  roleName: string[] = [];
  roleId: any[] = [];
  dropdownList: any[] = [];

  constructor(private myser: MyServService) {}

  ngOnInit() {
    this.myser.getRoleData().subscribe((res) => {
      this.roleArray = res.role;

      for (let i = 0; i < this.roleArray.length; i++) {
        this.roleName.push(this.roleArray[i].roleName);
        this.roleId[i] = this.roleArray[i].roleId;
        this.dropdownList.push({
          item_id: this.roleId[i],
          item_text: this.roleName[i],
        });
        // object push karva aa method

       }
      console.log(this.dropdownList);
    });
  }
  onItemSelect(item: any) {
    // console.log(item.item_id);
    console.log(this.selectedOptionData.item_id);
  }
  onSelectAll(items: ListItem[]) {
    console.log(items);
  }
  selectedOptionData: any;
}
