import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RegistrationService {
    constructor(private http: Http) { }

    addUser(fullname: string, email: string, password: string, confirmpassword: string) {
        return true;
    }

    cancel() {
        // remove user from local storage to log user out
        return false;
    }
}