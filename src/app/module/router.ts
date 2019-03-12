
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasklogsheetComponent } from '../Pages/tasklogsheet/tasklogsheet.component';
import { TaskListComponent } from '../Pages/task-list/task-list.component'

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', redirectTo: '/d', pathMatch: 'full' },
    { path: 'd', component: TasklogsheetComponent },
    {
      path: 'task-list',
      component: TaskListComponent,
    }
  ])
  ],
  exports: [RouterModule]
})

export class RoutingModule {
}
