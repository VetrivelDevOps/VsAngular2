import { Component, OnInit } from '@angular/core';
import { IClaims, ILanding } from '../../model/landing';
import { LandingService } from '../../Services/landing.service';
import { UIPageService } from '../../Services/uipage.service';
import { UIPageEelements } from '../../Model/uipageelement.model';
import { UIPage } from '../../Model/uipage.model';

@Component({
    selector: 'app-landing',
    templateUrl: 'app/Components/landing/landing.component.html'
})
export class LandingComponent implements OnInit {
    private claims: IClaims;
    private landing: ILanding[];
    private columns: UIPageEelements[];
    loading = false;
   
    uiPage: UIPage;
    isloaded: boolean = false;

    constructor(private uipageservice: UIPageService, private _landService: LandingService) {

        this.uipageservice.getElements('LandingPage').subscribe(ui => {
            this.uiPage = ui;            
            this.claims = this._landService.GetClaim();
            this.landing = this.claims.LandingList;
            this.columns = this.uiPage.UIPageEelements;
            this.isloaded = true;
        });
        
    }

    ngOnInit() {
       
    }

}
