import { Injectable } from '@angular/core';
import { IClaims, ILanding } from '../model/landing';
import { Observable } from 'rxjs/observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import '../mockservice/mocklanding'

export class LandingService {
    _landingObj: IClaims;
    _landingObjHead: string[];
    _landingObjList: ILanding[];
    constructor() { }

    GetClaim() {
       
        this._landingObjList = [];
        this._landingObjHead = [];
        this._landingObjHead = myColumns;
        
        for (var i = 0; i < myLanding.length; i++) {
            this._landingObjList.push(myLanding[i]);
                
        }
        this._landingObj = {
            LandingHead: this._landingObjHead,
            LandingList: this._landingObjList
        };
        return this._landingObj;
    };
}
