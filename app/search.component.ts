import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'search-todo',
  template: `
    <h1>{{title}}</h1>

    <div class="form search-form center-block">
      <input type="text" [(ngModel)]="searchString" class="form-control center-block">
    </div>
    
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