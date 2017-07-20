﻿import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {
        
        localStorage.setItem('username', JSON.stringify(username));
        return true;
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('username');
    }
}