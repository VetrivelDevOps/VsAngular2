import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './components/home.component';
import { TopBarComponent } from './Components/top-bar/top-bar.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { TablesComponent } from './Components/tables/tables.component';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing],
    declarations: [AppComponent, HomeComponent, TopBarComponent, SideBarComponent, DashboardComponent, TablesComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    bootstrap: [AppComponent]
})

export class AppModule { }