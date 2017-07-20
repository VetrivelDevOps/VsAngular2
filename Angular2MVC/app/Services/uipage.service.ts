
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { UIPage } from '../Model/uipage.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class UIPageService {
    constructor(private http: Http) { }

    getElements(screenName: string): Observable<UIPage> {
        debugger;
        var url = 'http://www.omsdev.com/api/UIPresentation?pageName=' + screenName ;
        return this.http.get(url)
            .map((response: Response) => <UIPage>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)));
            //var x = this.http.get('').map(res => res.json());
            //debugger;
            //this.screenElements = [
            //    { ElementName: 'LoginLabel', Value: 'User Id', Placeholder: 'Please enter', EditableReadOnlyHidden: 1 },
            //    { ElementName: 'PasswordLabel', Value: 'Password', Placeholder: 'Please enter', EditableReadOnlyHidden: 1 },
            //    { ElementName: 'LoginButton', Value: 'Login', Placeholder: '', EditableReadOnlyHidden: 1 },
            //    { ElementName: 'RegisterButton', Value: 'Register', Placeholder: '', EditableReadOnlyHidden: 1 },
            //    { ElementName: 'OtpLabel', Value: 'OTP', Placeholder: '', EditableReadOnlyHidden: 2 },
            //];
        //else {
        //    this.screenElements = [
        //        { ElementName: 'FullNameLabel', Value: 'Full Name', Placeholder: 'Full Name', EditableReadOnlyHidden: 1 },
        //        { ElementName: 'EmailLabel', Value: 'Email', Placeholder: 'Email', EditableReadOnlyHidden: 1 },
        //        { ElementName: 'PasswordLabel', Value: 'Password', Placeholder: 'Password', EditableReadOnlyHidden: 1 },
        //        { ElementName: 'ConfirmPasswordLabel', Value: 'Confirm Password', Placeholder: 'Confirm Password', EditableReadOnlyHidden: 1 },
        //        { ElementName: 'RegisterButton', Value: 'Register', Placeholder: '', EditableReadOnlyHidden: 1 },
        //        { ElementName: 'LoginButton', Value: 'Login', Placeholder: '', EditableReadOnlyHidden: 1 }
        //    ]
        //}

        //return this.screenElements;
    }
}