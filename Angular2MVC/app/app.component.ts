import { Component } from "@angular/core"
@Component({
    selector: "user-app",
    template: `
        <div id="wrapper">          
          <router-outlet></router-outlet>
        </div>       
`
})

export class AppComponent {

}