"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./Components/dashboard/dashboard.component");
var tables_component_1 = require("./Components/tables/tables.component");
var auth_guard_1 = require("./_guards/auth.guard");
var login_component_1 = require("./Components/login/login.component");
var landing_component_1 = require("./Components/landing/landing.component");
var register_component_1 = require("./Components/register.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: landing_component_1.LandingComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'tables', component: tables_component_1.TablesComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map