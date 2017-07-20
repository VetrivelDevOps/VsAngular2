import { Component, OnInit } from '@angular/core';
import '../../mockservice/mocklanding'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-top-bar',
    templateUrl: 'app/Components/top-bar/top-bar.component.html'
})
export class TopBarComponent implements OnInit {

    returnUrl: string = '/';

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
    }
    LogOut() {
        localStorage.removeItem('username');       
    };
}
