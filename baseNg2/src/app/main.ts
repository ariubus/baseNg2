
import {Component, enableProdMode} from 'angular2/core';

import {RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import {appRoutes} from './app.routes';

import {TopHeader} from "./Components/topheader";
import {Footer} from "./Components/footer";

import {CustomerService} from "./Services/customer.service";
import {AppService} from "./Services/app.service";

import {Http, HTTP_PROVIDERS} from "angular2/http";

@Component({
    selector: "importer-app",
    templateUrl: "/app/app",
    directives: [TopHeader, Footer, ROUTER_DIRECTIVES],
    providers: [AppService, CustomerService, HTTP_PROVIDERS]
})
@RouteConfig(appRoutes)
export class ImporterApp{ 

  
    
}





