
import { Component, OnInit } from '@angular/core';
import '../../mockservice/mockdashboard';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'app/Components/dashboard/dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    constructor() { }
    DashboardData = myDashboard;
  ngOnInit() {
      
  }

}
