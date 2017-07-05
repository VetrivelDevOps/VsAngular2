import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { IUser } from '../../model/user';
@Component({
  selector: 'app-tables',
  templateUrl: 'app/Components/tables/tables.component.html'
})
export class TablesComponent implements OnInit {

    constructor(private _httpService: Http) { }
    apiValues: IUser[] = [];
    ngOnInit() {
        this._httpService.get('/api/UserApi').subscribe(values => {
            this.apiValues = values.json() as IUser[];
        });
  }
  AlertMe(){
    alert('Why you clicked Me..!');
  }
}
