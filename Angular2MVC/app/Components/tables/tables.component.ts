import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IUser } from '../../model/user';
import { UserService } from '../../Services/user.service';
@Component({
  selector: 'app-tables',
  templateUrl: 'app/Components/tables/tables.component.html'
})
export class TablesComponent {
    private user: IUser[];
    constructor(private _userService: UserService) {
        this._userService.getUsers().subscribe(users => {
            this.user = users;
        })
    };
    
    AlertMe() {
        alert('Why you clicked Me..!');
    };

  }
 
