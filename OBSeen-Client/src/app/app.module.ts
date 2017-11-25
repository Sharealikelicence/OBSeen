import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AgendaListComponent } from './components/agenda-list/agenda-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AgendaListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
