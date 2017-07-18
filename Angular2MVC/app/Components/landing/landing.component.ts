import { Component, OnInit } from '@angular/core';
import { ILanding } from '../../model/landing';
import { LandingService } from '../../Services/landing.service';

@Component({
  selector: 'app-landing',
  templateUrl: 'app/Components/landing/landing.component.html'
})
export class LandingComponent implements OnInit {
    private landing: ILanding[] =[];
    constructor(private _landService: LandingService) {
        this.landing = this._landService.GetClaim();
    };
  ngOnInit() {
      
  }

}
