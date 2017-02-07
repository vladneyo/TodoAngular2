import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'search-todo',
  template: `
    <h1>{{title}}</h1>
    <input type="text" [(ngModel)]="searchString" >
    <div class="todo-list">
        <todo *ngFor="let todo of (list | searchTodo:searchString)" [todo]="todo"></todo>
    </div>
  `,

})
export class SearchComponent  {

  title = 'Search';

  searchString: string = "";
  
  list: Todo[] = [];

  constructor(private todoService: TodoService){
      this.list = todoService.getTodos();
  }
}