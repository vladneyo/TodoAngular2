import { Component, Input } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
    selector: 'create-todo',
    templateUrl: './app/create-todo.component.html',
})
export class CreateTodoComponent{
    
    constructor(private todoService: TodoService){
        this._todoService = todoService;
        }

    private _todoService: TodoService;

    todo: Todo = new Todo();

    add(): void{
        this._todoService.addTodo(this.todo);
        this.clear();
    }

    private clear(): void{
        this.todo = new Todo();
    }
}