import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IUser } from '../model/user';
import { Observable } from 'rxjs/observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    constructor(private _httpService: Http) { }

    getUsers(): Observable<IUser[]> {
        return this._httpService.get('/api/UserApi').map(res => res.json());
    }
}
