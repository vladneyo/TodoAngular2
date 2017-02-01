import { Component } from '@angular/core';

@Component({
  selector: 'todo-app',
  template: `<h1>First {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular 2 App !'; }
