import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { TodoListComponent } from './todo-list.component';
import { TodoComponent } from './todo.component';
import { CreateTodoComponent } from './create-todo.component';
import { TodoService } from './todo.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TodoListComponent, TodoComponent, CreateTodoComponent ],
  providers: [ TodoService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
