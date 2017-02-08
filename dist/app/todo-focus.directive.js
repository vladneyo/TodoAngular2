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
var core_1 = require('@angular/core');
var TodoFocusDirective = (function () {
    function TodoFocusDirective(el) {
        this.el = el;
        this.prevColor = "";
    }
    TodoFocusDirective.prototype.onMouseEnter = function () {
        this.prevColor = this.el.nativeElement.style.backgroundColor;
        this.el.nativeElement.style.backgroundColor = "transparent";
        this.el.nativeElement.style.outline = "3px solid #3786D0";
    };
    TodoFocusDirective.prototype.onMouseLeave = function () {
        this.el.nativeElement.style.backgroundColor = this.prevColor;
        this.el.nativeElement.style.outline = null;
    };
    __decorate([
        core_1.HostListener('mouseenter'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], TodoFocusDirective.prototype, "onMouseEnter", null);
    __decorate([
        core_1.HostListener('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], TodoFocusDirective.prototype, "onMouseLeave", null);
    TodoFocusDirective = __decorate([
        core_1.Directive({
            selector: '[todoFocus]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], TodoFocusDirective);
    return TodoFocusDirective;
}());
exports.TodoFocusDirective = TodoFocusDirective;
//# sourceMappingURL=todo-focus.directive.js.map