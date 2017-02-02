import { Component, Input } from '@angular/core';
import { Todo } from './todo';

@Component({
    selector: 'todo',
    template: `
    <div class="todo">
        <p>{{todo.title}}</p>
    </div>
    `,
})
export class TodoComponent{
    @Input()
    todo: Todo
}