import { Component, Input } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
    selector: 'create-todo',
    template: `
    <div>
        <input type="text" [(ngModel)]="todo.title">
        <button (click)="add()">ADD</button>
    </div>`,
})
export class CreateTodoComponent{
    
    constructor(private todoService: TodoService){
        this._todoService = todoService;
        }

    private _todoService: TodoService;
    todo: Todo = new Todo();

    add(){
        this._todoService.addTodo(this.todo);
        this.clear();
    }

    private clear(){
        this.todo = new Todo();
    }
}