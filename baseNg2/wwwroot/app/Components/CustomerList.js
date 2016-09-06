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
var app_service_1 = require("../Services/app.service");
var Customer_1 = require("../Models/Customer");
var DropDownList_1 = require("../bs-comp/DropDownList/DropDownList");
var CustomerList = (function () {
    function CustomerList(appService) {
        this.appService = appService;
        this.gridColumns = [
            { dataField: "CustomerId", header: "S$Id", width: 1 },
            { dataField: "InART", header: "InART", width: 1 },
            { dataField: "InCRM", header: "InCRM", width: 1 },
            { dataField: "STH/PRE", header: "STH/PRE", width: 1 },
            { dataField: "FirstName", header: "Firstname", width: 1 },
            { dataField: "LastName", header: "Lastname", width: 1 },
            { dataField: "Company", header: "Company", width: 1 },
            { dataField: "Email", header: "Email", width: 3 },
            { dataField: "AllPhones", header: "Phones", width: 2 }
        ];
        this.sources = [
            { displayName: "Group Sales For Migration", id: "GroupSalesForMigration" },
            { displayName: "Individual Sales For Migration", id: "IndividualSalesForMigration" },
            { displayName: "Add or upload manually", id: "manually" }
        ];
        this.searchExp = "";
        this.sourceSelected = true;
    }
    CustomerList.prototype.onSourceChanged = function (source) {
        if (source.id == "manually") {
            this.sourceSelected = false;
        }
        else {
            this.sourceSelected = true;
        }
        this.appService.loadCustomersInSource(source.id);
        console.debug(source.displayName);
    };
    CustomerList.prototype.onAddClick = function () {
        this.appService.addCustomersByIds(this.csvCustomers);
    };
    CustomerList.prototype.onFileChange = function (event) {
        this.file = event.srcElement.files[0];
        console.log(this.file);
    };
    CustomerList.prototype.onUploadFileClick = function () {
        this.appService.uploadFile(this.file);
    };
    CustomerList.prototype.onImportClick = function () {
        var customerPipe = new Customer_1.CustomerPipe();
        var customers = customerPipe.transform(this.appService.customers, this.searchExp);
        this.appService.processCustomers(customers);
    };
    CustomerList = __decorate([
        core_1.Component({
            selector: "customer-list",
            templateUrl: "/app/customerlist",
            directives: [DropDownList_1.DropDownList],
            pipes: [Customer_1.CustomerPipe]
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService])
    ], CustomerList);
    return CustomerList;
}());
exports.CustomerList = CustomerList;
//# sourceMappingURL=CustomerList.js.map