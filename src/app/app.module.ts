import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
 import { TasklogsheetComponent } from './Pages/tasklogsheet/tasklogsheet.component'
import { RouterModule} from '@angular/router';
import { TaskListComponent } from './Pages/task-list/task-list.component';
import {   routes} from './module/router';

@NgModule({
  declarations: [
    AppComponent,
     TasklogsheetComponent,
    TaskListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      routes ,
      { enableTracing: true } // <-- debugging purposes only
    )


  ],
  // providers: [Routerclass],
  bootstrap: [AppComponent]
})
export class AppModule { }
