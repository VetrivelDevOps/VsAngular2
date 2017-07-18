import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: 'app/Components/login/login.component.html'
})
export class LoginComponent {
    returnUrl: string;
    username: string = '';
    password:string = "";
    inputValueChange: EventEmitter<any> = new EventEmitter();
    constructor(
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    login() {
        if (this.username === "admin" && this.password === "pass@123") {
            localStorage.setItem('currentUser', this.username);
            this.router.navigate([this.returnUrl]);
        } else {
            alert("Invalid Username or Password..!");
        }
    }
}