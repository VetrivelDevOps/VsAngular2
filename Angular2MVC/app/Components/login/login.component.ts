import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UIPageEelements } from '../../Model/uipageelement.model';
import { UIPage } from '../../Model/uipage.model';
import { AuthenticationService } from '../../Services/authentication.service';
import { UIPageService } from '../../Services/uipage.service';
import { IUser } from '../../Model/user';
import 'rxjs/add/operator/toPromise';
@Component({
    templateUrl: 'app/Components/login/login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    screenElements: UIPageEelements[] = [];
    uiPage: UIPage;
    loginLabel: string;
    isloaded: boolean = false;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private uipageservice: UIPageService) {
        debugger;
        this.uipageservice.getElements('LoginPage').subscribe(ui => {
            this.uiPage = ui;
            this.screenElements = this.uiPage.UIPageEelements;
            this.loginLabel = this.screenElements[0].label;
            this.isloaded = true;
        });
    }

    ngOnInit() {

        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        var result = this.authenticationService.login(this.model.username, this.model.password);
        this.router.navigate([this.returnUrl]);
    }
}
