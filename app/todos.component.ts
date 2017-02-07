import { Component } from '@angular/core';

@Component({
  selector: 'todos',
  template: `
    <h1>{{title}}</h1>
    <create-todo></create-todo>
    <todo-list></todo-list>
  `,

})
export class TodosComponent  { title = 'First Angular 2 App !'; }