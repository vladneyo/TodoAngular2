import { Component } from '@angular/core';

@Component({
  selector: 'todo-app',
  template: `
  <div class="container main">
    <nav>
      <a routerLink="/todos" routerLinkActive="active">Todos</a>
      <a routerLink="/search" routerLinkActive="active">Search</a>
    </nav>
    <router-outlet></router-outlet>
  </div>
  `,

})
export class AppComponent  { }
