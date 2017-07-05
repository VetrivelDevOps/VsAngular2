"use strict";
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./Components/dashboard/dashboard.component");
var tables_component_1 = require("./Components/tables/tables.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: dashboard_component_1.DashboardComponent },
    { path: 'tables', component: tables_component_1.TablesComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map