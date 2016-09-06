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
var customer_service_1 = require("./customer.service");
var AppService = (function () {
    function AppService(customerService) {
        this.customerService = customerService;
        this.customers = [];
    }
    AppService.prototype.loadCustomersInSource = function (sourceId) {
        var _this = this;
        this.customerService.getCustomersInSource(sourceId)
            .subscribe(function (customers) { return _this.setCustomers(customers); }, function (error) { return _this.errorMessage = error; });
    };
    AppService.prototype.addCustomersByIds = function (ids) {
        var _this = this;
        this.customerService.getCustomersByIds(ids)
            .subscribe(function (customers) { return _this.addCustomers(customers); }, function (error) { return _this.errorMessage = error; });
    };
    AppService.prototype.uploadFile = function (file) {
        var _this = this;
        this.customerService.getCustomersByFileIds(file)
            .subscribe(function (customers) { return _this.addCustomers(customers); }, function (error) { return _this.errorMessage = error; });
    };
    AppService.prototype.processCustomers = function (customers) {
        var _this = this;
        var ids = [];
        for (var _i = 0, customers_1 = customers; _i < customers_1.length; _i++) {
            var cust = customers_1[_i];
            ids.push(cust.CustomerId);
        }
        this.customerService.processCustomers(ids)
            .subscribe(function (customers) { return _this.updateCustomers(customers); }, function (error) { return _this.errorMessage = error; });
    };
    AppService.prototype.setCustomers = function (customers) {
        this.customers = customers;
    };
    AppService.prototype.addCustomers = function (customers) {
        for (var _i = 0, customers_2 = customers; _i < customers_2.length; _i++) {
            var cust = customers_2[_i];
            this.customers.push(cust);
        }
    };
    AppService.prototype.updateCustomers = function (customers) {
        for (var _i = 0, customers_3 = customers; _i < customers_3.length; _i++) {
            var sourceCust = customers_3[_i];
            for (var _a = 0, _b = this.customers; _a < _b.length; _a++) {
                var destCust = _b[_a];
                if (sourceCust.CustomerId == destCust.CustomerId) {
                    destCust.InART = sourceCust.InART;
                    destCust.InCRM = sourceCust.InCRM;
                    destCust.IsSTH_PRE = sourceCust.IsSTH_PRE;
                }
                continue;
            }
        }
    };
    AppService = __decorate([
        core_1.Component({
            providers: []
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [customer_service_1.CustomerService])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map