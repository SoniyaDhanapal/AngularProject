import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TasklogsheetComponent } from './tasklogsheet/tasklogsheet.component';
import { TaskListComponent } from './task-list/task-list.component';
// import { HeroComponent } from './task-list/Hero';
// import { HttpModule } from '@angular/http';
// import { NgxWidgetGridModule } from 'ngx-widget-grid';

@NgModule({
  declarations: [
    AppComponent,
    TasklogsheetComponent,
    TaskListComponent
    // HeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule,
    // NgxWidgetGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
