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
var Grid = (function () {
    function Grid() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Grid.prototype, "columns", void 0);
    Grid = __decorate([
        core_1.Component({
            selector: "my-grid"
        }), 
        __metadata('design:paramtypes', [])
    ], Grid);
    return Grid;
}());
exports.Grid = Grid;
var GridColumn = (function () {
    function GridColumn() {
    }
    return GridColumn;
}());
exports.GridColumn = GridColumn;
//# sourceMappingURL=grid.js.map