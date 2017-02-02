import { Component } from '@angular/core';

@Component({
  selector: 'todo-app',
  template: `
  <div class="main">
    <h1>{{title}}</h1>
    <create-todo></create-todo>
    <todo-list></todo-list>
  </div>
  `,

})
export class AppComponent  { title = 'First Angular 2 App !'; }
