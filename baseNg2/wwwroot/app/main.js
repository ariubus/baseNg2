"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var app_routes_1 = require('./app.routes');
var topheader_1 = require("./Components/topheader");
var footer_1 = require("./Components/footer");
var customer_service_1 = require("./Services/customer.service");
var app_service_1 = require("./Services/app.service");
var http_1 = require("angular2/http");
var ImporterApp = (function () {
    function ImporterApp() {
    }
    ImporterApp = __decorate([
        core_1.Component({
            selector: "importer-app",
            templateUrl: "/app/app",
            directives: [topheader_1.TopHeader, footer_1.Footer, router_1.ROUTER_DIRECTIVES],
            providers: [app_service_1.AppService, customer_service_1.CustomerService, http_1.HTTP_PROVIDERS]
        }),
        router_1.RouteConfig(app_routes_1.appRoutes), 
        __metadata('design:paramtypes', [])
    ], ImporterApp);
    return ImporterApp;
}());
exports.ImporterApp = ImporterApp;
//# sourceMappingURL=main.js.map