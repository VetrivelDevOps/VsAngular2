import { Injectable } from '@angular/core';
import { IClaims, ILanding, UIPageEelements } from '../model/landing';
import { Observable } from 'rxjs/observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import '../mockservice/mocklanding'

export class LandingService {
    _landingObj: IClaims;
    _landingObjHead: UIPageEelements[];
    _landingObjList: ILanding[];
    constructor() { }

    GetClaim() {
       
        this._landingObjList = [];
        this._landingObjHead = [];
        debugger;
        for (var i = 0; i < myLanding.length; i++) {
            this._landingObjList.push(myLanding[i]);
                
        }
        for (var i = 0; i < myUIElement.length; i++) {
            this._landingObjHead.push(myUIElement[i]);

        }
        this._landingObj = {
            LandingHead: this._landingObjHead,
            LandingList: this._landingObjList
        };
        return this._landingObj;
    };
}
