import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  elements:any;
  headElements = ['Task number ', ' Task name', ' Developer Name', ' Status'];
  constructor() { }

  ngOnInit() {
    debugger;
    this.elements = JSON.parse(localStorage.getItem('saved'));
  }

Delete(ele: any,i: number){
  this.elements.splice(i,1);
   localStorage.setItem('saved', JSON.stringify(this.elements));
}

}
