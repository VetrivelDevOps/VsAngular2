import { Component, OnInit } from '@angular/core';
import { IClaims, ILanding } from '../../model/landing';
import { LandingService } from '../../Services/landing.service';

@Component({
  selector: 'app-landing',
  templateUrl: 'app/Components/landing/landing.component.html'
})
export class LandingComponent implements OnInit {
    private claims: IClaims;
    private landing: ILanding[];
    private columns: string[];
    constructor(private _landService: LandingService) {
    }
  ngOnInit() {
      debugger;
      this.claims = this._landService.GetClaim();
      this.landing = this.claims.LandingList;
      this.columns = this.claims.LandingHead;
  }

}
