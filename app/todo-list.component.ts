import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
    selector: 'todo-list',
    template: `
    <div class="todo-list">
        <todo *ngFor="let todo of list" [todo]="todo"></todo>
    </div>
    `,
})
export class TodoListComponent{
    
    list: Todo[] = [];

    constructor(private todoService: TodoService){
        this.list = todoService.getTodos();
    }
    
}