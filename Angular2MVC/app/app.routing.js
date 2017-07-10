"use strict";
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./Components/dashboard/dashboard.component");
var tables_component_1 = require("./Components/tables/tables.component");
var auth_guard_1 = require("./Guards/auth.guard");
var login_component_1 = require("./Components/login/login.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: dashboard_component_1.DashboardComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'tables', component: tables_component_1.TablesComponent },
    { path: 'login', component: login_component_1.LoginComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map