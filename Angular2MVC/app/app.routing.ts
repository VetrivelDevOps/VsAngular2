import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { TopBarComponent } from './Components/top-bar/top-bar.component'
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { TablesComponent } from './Components/tables/tables.component';
const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: DashboardComponent },
    { path: 'tables', component: TablesComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);