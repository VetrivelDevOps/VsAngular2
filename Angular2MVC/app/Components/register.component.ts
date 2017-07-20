import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UIPageEelements } from '../Model/uipageelement.model';
import { UIPage } from '../Model/uipage.model';
import { RegistrationService } from '../Services/registration.service';
import { UIPageService } from '../Services/uipage.service';

@Component({
    templateUrl: 'app/Components/register.component.html'
})

export class RegisterComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    screenElements: UIPageEelements[];
    uiPage: UIPage;
    isloaded: boolean = false;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private registrationService: RegistrationService,
        private uipageservice: UIPageService) {
        debugger;
        this.uipageservice.getElements('RegistrationPage').subscribe(ui => {
            this.uiPage = ui;
            this.screenElements = this.uiPage.UIPageEelements;
            this.isloaded = true;
        });
    }

    ngOnInit() {
       

        //this.screenElements = this.uipageservice.getElements('register');

        // reset login status
        //this.registrationService.cancel();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    addUser() {
        this.loading = true;
        alert("Registered successfully!!");
        var result = this.registrationService.addUser(this.model.fullname, this.model.email, this.model.password, this.model.confirmpassword);
        this.router.navigate([this.returnUrl]);
    }
}
