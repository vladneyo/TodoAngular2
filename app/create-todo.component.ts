import { Component, Input, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'create-todo',
    templateUrl: './app/create-todo.component.html',
})
export class CreateTodoComponent implements OnInit {
    
    constructor(private todoService: TodoService, private fb: FormBuilder){ }

    ngOnInit(): void{
        this.buildForm();
    }

    todoForm: FormGroup;

    formErrors = {
        'title': '',
        'color': ''
    };

    validationMessages = {
        'title': {
        'required': 'Title is required.',
        'minlength': 'Title must be at least 4 characters long.'
        },
        'color': {
        'required': 'Color is required.'
        }
    };

    todo: Todo = new Todo();

    add(): void{
        this.todoService.addTodo(this.todoForm.value);
        this.todoForm.reset();
    }

    buildForm(): void{
        this.todoForm = this.fb.group({
            'title': [this.todo.title, [
                   Validators.required,
                   Validators.minLength(4)]],
            'color': [this.todo.color, [Validators.required]]
        });

        this.todoForm.valueChanges.subscribe(data => this.onValueChanged(data));
        this.onValueChanged();
    }

    onValueChanged(data?: any) {
        if (!this.todoForm) { return; }
        const form = this.todoForm;

        for (const field in this.formErrors) {
            this.formErrors[field] = '';
            const control = form.get(field);

            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }
}