import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { TopBarComponent } from './Components/top-bar/top-bar.component'
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { TablesComponent } from './Components/tables/tables.component';
import { AuthGuard } from './Guards/auth.guard';
import { LoginComponent } from './Components/login/login.component'
const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'tables', component: TablesComponent },
    { path: 'login', component: LoginComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);