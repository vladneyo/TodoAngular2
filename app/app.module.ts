import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { TodosComponent } from './todos.component';
import { TodoListComponent } from './todo-list.component';
import { TodoComponent } from './todo.component';
import { CreateTodoComponent } from './create-todo.component';
import { TodoService } from './todo.service';
import { SearchComponent } from './search.component';
import { SearchTodoPipe } from './search-todo.pipe';


const appRoutes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'todos', component: TodosComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', redirectTo: '/todos' }
];

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, FormsModule, RouterModule.forRoot(appRoutes)  ],
  declarations: [ AppComponent, TodoListComponent, TodoComponent, CreateTodoComponent, TodosComponent, SearchComponent, SearchTodoPipe ],
  providers: [ TodoService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
