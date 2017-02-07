import { Component } from '@angular/core';

@Component({
  selector: 'search-todo',
  template: `
    <h1>{{title}}</h1>
  `,

})
export class SearchComponent  { title = 'Search'; }