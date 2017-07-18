import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './components/home.component';
import { TopBarComponent } from './Components/top-bar/top-bar.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { TablesComponent } from './Components/tables/tables.component';
import { UserService } from './Services/user.service';
import { LandingService } from './Services/landing.service';
import { AuthGuard } from './Guards/auth.guard';
import { LandingComponent } from './Components/landing/landing.component'

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, FormsModule],
    declarations: [AppComponent, HomeComponent, TopBarComponent, SideBarComponent, DashboardComponent, TablesComponent, LoginComponent, LandingComponent],
    providers: [AuthGuard, { provide: APP_BASE_HREF, useValue: '/' }, UserService, LandingService],
    bootstrap: [AppComponent]
})

export class AppModule { }