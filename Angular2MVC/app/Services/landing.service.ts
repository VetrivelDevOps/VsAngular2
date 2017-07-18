import { Injectable } from '@angular/core';
import { ILanding } from '../model/landing';
import { Observable } from 'rxjs/observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import '../mockservice/mocklanding'

export class LandingService {
    _landingObj: ILanding[] =[];
    constructor() { }

    GetClaim() {
        this._landingObj = [];
        for (var i = 0; i < myLanding.length; i++) {
            this._landingObj.push(myLanding[i]);
                
        }
        return this._landingObj;
    };
}
