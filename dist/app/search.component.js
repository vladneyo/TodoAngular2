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
var todo_service_1 = require('./todo.service');
var SearchComponent = (function () {
    function SearchComponent(todoService) {
        this.todoService = todoService;
        this.title = 'Search';
        this.searchString = "";
        this.list = [];
        this.list = todoService.getTodos();
    }
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search-todo',
            template: "\n    <h1>{{title}}</h1>\n    <input type=\"text\" [(ngModel)]=\"searchString\" >\n    <div class=\"todo-list\">\n        <todo *ngFor=\"let todo of (list | searchTodo:searchString)\" [todo]=\"todo\"></todo>\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map