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
var todo_1 = require('./todo');
var TodoComponent = (function () {
    function TodoComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', todo_1.Todo)
    ], TodoComponent.prototype, "todo", void 0);
    TodoComponent = __decorate([
        core_1.Component({
            selector: 'todo',
            template: "\n    <div class=\"todo\" [ngStyle]=\"{'background-color': todo.color}\" [@todoInOut]=\"'in'\" todoFocus>\n        <p>{{todo.title}}</p>\n    </div>\n    ",
            animations: [
                core_1.trigger('todoInOut', [
                    core_1.state('in', core_1.style({ opacity: 1, transform: 'translateX(0)' })),
                    core_1.state('void', core_1.style({ opacity: 0, transform: 'translateX(-100%)' })),
                    core_1.transition('void => *', [
                        core_1.style({
                            opacity: 1,
                            transform: 'translateX(-100%)'
                        }),
                        core_1.animate('0.2s ease-in')
                    ]),
                    core_1.transition('* => void', [
                        core_1.style({
                            opacity: 1,
                            transform: 'translateX(-100%)'
                        }),
                        core_1.animate('0.2s 10 ease-out', core_1.style({
                            opacity: 0,
                            transform: 'scale(0,0)'
                        }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=todo.component.js.map