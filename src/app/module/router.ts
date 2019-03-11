// import { Routes, RouterModule } from '@angular/router';
// import { NgModule } from '@angular/core';
// import { TaskListComponent } from '../Pages/task-list/task-list.component';
// import { TasklogsheetComponent } from '../Pages/tasklogsheet/tasklogsheet.component';

// export const appRoutes: Routes = [
//   {
//     path: 'task-logsheet',
//     component: TasklogsheetComponent
//   },
//   {
//     path: 'task-list',
//     component: TaskListComponent
//   }
// ];
//    @NgModule({
//     imports: [
//       RouterModule.forRoot(
//         appRoutes,
//         { enableTracing: true } // <-- debugging purposes only
//       )
//       ],
//       })
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasklogsheetComponent } from '../Pages/tasklogsheet/tasklogsheet.component';
import { TaskListComponent } from '../Pages/task-list/task-list.component';


export const routes: Routes = [
  {
    path: 'TaskListComponent',
    component: TaskListComponent,
    },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class Router {
}
