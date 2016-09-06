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
var Customer = (function () {
    function Customer() {
        console.log("Instaciating Customer");
    }
    Object.defineProperty(Customer.prototype, "Phones", {
        get: function () {
            return this._Phones;
        },
        set: function (phones) {
            this.Phones = phones;
            var contcat = "";
            for (var _i = 0, _a = this.Phones; _i < _a.length; _i++) {
                var ph = _a[_i];
                contcat += ph + "; ";
            }
            this.AllPhones = contcat;
        },
        enumerable: true,
        configurable: true
    });
    return Customer;
}());
exports.Customer = Customer;
var CustomerPipe = (function () {
    function CustomerPipe() {
    }
    CustomerPipe.prototype.transform = function (items, pattern) {
        return items.filter(function (item) {
            return (item.AllPhones && item.AllPhones.indexOf(pattern) !== -1) ||
                (item.ArchticsId && item.ArchticsId.indexOf(pattern) !== -1) ||
                (item.CompanyName && item.CompanyName.indexOf(pattern) !== -1) ||
                (item.Email && item.Email.indexOf(pattern) !== -1) ||
                (item.FirstName && item.FirstName.indexOf(pattern) !== -1) ||
                (item.LastName && item.LastName.indexOf(pattern) !== -1) ||
                (item.MiddleName && item.MiddleName.indexOf(pattern) !== -1);
        });
    };
    CustomerPipe = __decorate([
        core_1.Pipe({
            name: "custFilter",
            pure: false
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CustomerPipe);
    return CustomerPipe;
}());
exports.CustomerPipe = CustomerPipe;
//# sourceMappingURL=Customer.js.map