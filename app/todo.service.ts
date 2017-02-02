import { Todo } from './todo';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService{
    private todos: Todo[] = [
        {title : "qwe"},
        {title : "rtyrtyrt"},
    ];

    getTodos(): Todo[] {
        return this.todos;
    }

    addTodo(todo: Todo) {
        this.todos.push(todo);
    }
}