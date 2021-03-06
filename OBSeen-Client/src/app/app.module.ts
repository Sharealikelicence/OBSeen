import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { MaterialModule } from './material/material.module'

import { AppComponent } from './app.component';
import { AgendaListComponent } from './components/agenda/agenda-list/agenda-list.component';
import { TodoListNewComponent } from './components/todo/todo-list-new/todo-list-new.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AgendaDetailComponent } from './components/agenda/agenda-detail/agenda-detail.component';
import { TodoListDetailComponent } from './components/todo/todo-list-detail/todo-list-detail.component';
import { HomeComponent } from './components/home/home.component';
import { TodoItemNewComponent } from './components/todo/todo-item-new/todo-item-new.component';

const appRoutes: Routes = [
  { path: 'TodoList', component: TodoListDetailComponent },
  { path: 'TodoListNew', component: TodoListNewComponent },
  { path: 'Agenda/:isTodays', component: AgendaDetailComponent},
  { path: 'AgendaList', component: AgendaListComponent },
  { path: 'Settings', component: SettingsComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const ICON_URL: string = '/node_modules/open-iconic/svg/';

@NgModule({
  declarations: [
    AppComponent,
    AgendaListComponent,
    TodoListNewComponent,
    SettingsComponent,
    PageNotFoundComponent,
    AgendaDetailComponent,
    TodoListDetailComponent,
    HomeComponent,
    TodoItemNewComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes //,
      //{ enableTracing: true } // Used for debugging only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
