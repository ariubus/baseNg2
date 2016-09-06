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
var DropDownList = (function () {
    function DropDownList() {
        this.initialText = "Select a value from the list";
        this.componentId = "dropDown1";
        this.onValueChanged = new core_1.EventEmitter();
    }
    DropDownList.prototype.onItemClick = function (option) {
        this.initialText = option[this.nameField];
        this.onValueChanged.emit(option);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DropDownList.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DropDownList.prototype, "valueField", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DropDownList.prototype, "nameField", void 0);
    __decorate([
        core_1.Input('component-id'), 
        __metadata('design:type', String)
    ], DropDownList.prototype, "componentId", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DropDownList.prototype, "onValueChanged", void 0);
    DropDownList = __decorate([
        core_1.Component({
            selector: "dropdownlist",
            template: "\n<div class=\"dropdown\">\n    <button class=\"btn btn-default dropdown-toggle form-control\" type=\"button\" id=\"{{componentId}}\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n        {{initialText}}\n        <span class=\"caret\"></span>\n    </button>\n    <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n\n        <li *ngFor=\"let option of data\" (click)=\"onItemClick(option)\"><a href=\"#\">{{option[nameField]}}</a></li>\n\n    </ul>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], DropDownList);
    return DropDownList;
}());
exports.DropDownList = DropDownList;
//# sourceMappingURL=DropDownList.js.map