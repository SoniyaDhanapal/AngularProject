import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
 import { TasklogsheetComponent } from './Pages/tasklogsheet/tasklogsheet.component'
import { RouterModule, Routes, Router} from '@angular/router';
import { TaskListComponent } from './Pages/task-list/task-list.component';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { RoutingModule } from './module/router';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
export const routes: Routes = [
  { path: '' , component: TasklogsheetComponent },
  { path: 'task-list' , component: TaskListComponent }
]

@NgModule({
  declarations: [
    AppComponent,
     TasklogsheetComponent,
    TaskListComponent,
  ],
  imports: [
    BrowserModule,
     FormsModule, RoutingModule,
    //  MDBBootstrapModule.forRoot()
    //  RouterModule.forRoot(routes) ,
  ],
   exports: [RouterModule],

  bootstrap: [AppComponent]
})
export class AppModule { }
