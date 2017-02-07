import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo';

@Pipe({
    name: 'searchTodo',
    pure: false
})
export class SearchTodoPipe implements PipeTransform {

    transform(todos:Todo[], title:string): Todo[] {
        return todos.filter(t => t.title.toLowerCase().includes(title.toLowerCase()));
    }
}