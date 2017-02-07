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
var todo_service_1 = require('./todo.service');
var forms_1 = require('@angular/forms');
var CreateTodoComponent = (function () {
    function CreateTodoComponent(todoService, fb) {
        this.todoService = todoService;
        this.fb = fb;
        this.formErrors = {
            'title': '',
            'color': ''
        };
        this.validationMessages = {
            'title': {
                'required': 'Title is required.',
                'minlength': 'Title must be at least 4 characters long.'
            },
            'color': {
                'required': 'Color is required.'
            }
        };
        this.todo = new todo_1.Todo();
    }
    CreateTodoComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    CreateTodoComponent.prototype.add = function () {
        this.todoService.addTodo(this.todoForm.value);
        this.todoForm.reset();
    };
    CreateTodoComponent.prototype.buildForm = function () {
        var _this = this;
        this.todoForm = this.fb.group({
            'title': [this.todo.title, [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(4)]],
            'color': [this.todo.color, [forms_1.Validators.required]]
        });
        this.todoForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    CreateTodoComponent.prototype.onValueChanged = function (data) {
        if (!this.todoForm) {
            return;
        }
        var form = this.todoForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    CreateTodoComponent = __decorate([
        core_1.Component({
            selector: 'create-todo',
            templateUrl: './app/create-todo.component.html',
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService, forms_1.FormBuilder])
    ], CreateTodoComponent);
    return CreateTodoComponent;
}());
exports.CreateTodoComponent = CreateTodoComponent;
//# sourceMappingURL=create-todo.component.js.map