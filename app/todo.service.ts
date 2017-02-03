import { Todo } from './todo';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService{
    private todos: Todo[] = [
        {title : "Learn Angular 2", color: "rgba(0, 128, 128, 0.5)"},
        {title : "Create first component", color: "rgba(90,199,185, 0.3)"},
        {title : "Make a money", color: "rgba(70,146,185, 0.8)"},
    ];

    getTodos(): Todo[] {
        return this.todos;
    }

    addTodo(todo: Todo): void{
        this.todos.push(todo);
    }
}