import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/home/components/header/header.component';
import { TodoButtonDeleAllComponent } from './modules/home/components/todo-button-dele-all/todo-button-dele-all.component';
import { TodoInputAddItensComponent } from './modules/home/components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './modules/home/components/todo-list/todo-list.component';

//Pages
import { HomeComponent } from './modules/home/pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoButtonDeleAllComponent, 
    TodoInputAddItensComponent, 
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
