import { Component } from "@angular/core"
@Component({
    selector: "user-app",
    template: `
        <div id="wrapper">
          <app-top-bar></app-top-bar>
          <router-outlet></router-outlet>
        </div>       
`
})

export class AppComponent {

}