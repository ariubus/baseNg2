/// <reference path="../../../node_modules/angular2/typings/browser.d.ts" />
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
var core_1 = require("angular2/core");
var http_1 = require("angular2/http");
var Observable_1 = require('rxjs/Observable');
//// Statics
require('rxjs/add/observable/throw');
//// Operators
require('rxjs/add/operator/catch');
//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/distinctUntilChanged';
require('rxjs/add/operator/map');
var CustomerService = (function () {
    function CustomerService(http) {
        this.http = http;
        this.baseUrl = "api/customer/";
    }
    CustomerService.prototype.getCustomersInSource = function (sourceId) {
        return this.http.post(this.baseUrl + "findbySourceId/" + sourceId, "")
            .map(this.extractCustomers)
            .catch(this.handleError);
    };
    CustomerService.prototype.getCustomersByIds = function (ids) {
        return this.http.post(this.baseUrl + "findbyids", ids)
            .map(this.extractCustomers)
            .catch(this.handleError);
    };
    CustomerService.prototype.getCustomersByFileIds = function (file) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            var formData = new FormData(), xhr = new XMLHttpRequest();
            //for (let i = 0; i < files.length; i++) {
            formData.append("file", file, file.name);
            //}
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    }
                    else {
                        observer.error(xhr.response);
                    }
                }
            };
            xhr.upload.onprogress = function (event) {
                //   this.progress = Math.round(event.loaded / event.total * 100);
                //  this.progressObserver.next(this.progress);
            };
            xhr.open('POST', _this.baseUrl + "findbyfileIds", true);
            xhr.send(formData);
        });
    };
    CustomerService.prototype.processCustomers = function (ids) {
        var body = JSON.stringify(ids);
        var headers = new http_1.Headers();
        headers.append("Content-type", "application/json");
        return this.http.post("api/customer/processcustomers", body, { headers: headers })
            .map(this.extractCustomers)
            .catch(this.handleError);
    };
    CustomerService.prototype.extractCustomers = function (response) {
        var result = response.json();
        return result || [];
    };
    CustomerService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    CustomerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CustomerService);
    return CustomerService;
}());
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map