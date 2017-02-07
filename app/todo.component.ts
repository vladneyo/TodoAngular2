import { Component, Input, trigger, state, style, transition, animate, group} from '@angular/core';
import { Todo } from './todo';

@Component({
    selector: 'todo',
    template: `
    <div class="todo" [ngStyle]="{'background-color': todo.color}" [@todoInOut]="'in'">
        <p>{{todo.title}}</p>
    </div>
    `,
    animations: [
        trigger('todoInOut', [
            state('in', 
                style({opacity: 1, transform: 'translateX(0)' })),
            state('void', 
                style({opacity: 0, transform: 'translateX(-100%)' })),
            transition('void => *', [
                style({ 
                    opacity: 1, 
                    transform: 'translateX(-100%)' 
                }),
                animate('0.2s ease-in')
            ]),
            transition('* => void', [
                style({ 
                    opacity: 1, 
                    transform: 'translateX(-100%)' 
                }),
                animate('0.2s 10 ease-out', 
                    style({
                        opacity: 0,
                        transform: 'scale(0,0)'
                    }))
            ])
        ])
    ]
})
export class TodoComponent{
    
    @Input()
    todo: Todo
}