import { Component, OnInit } from '@angular/core';
import { HeroModel, test } from './../../module/Hero'
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasklogsheet',
  templateUrl: './tasklogsheet.component.html',
  styleUrls: ['./tasklogsheet.component.css']
})
export class TasklogsheetComponent implements OnInit {
  taskNo: any;
  taskName: any;
  developerName: any;
 listOfDeveopers: HeroModel[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
    this.listOfDeveopers = test; // Developers;
  }

  onWidgetChange(): void { }

  onAssignToDeveloperClick(): void {
    // this.taskNo++;
     let itemsArray =[];
     const local = JSON.parse(localStorage.getItem("saved"));
     if(local != null) {

    if(local.length>0)
    {
          itemsArray  =JSON.parse(localStorage.getItem('saved'));
    } 
     }

    const myObj = {
      taskNo: this.taskNo,
      taskName: this.taskName,
      developerName: this.developerName
    };
    itemsArray.push(myObj)
debugger;
    localStorage.setItem('saved', JSON.stringify(itemsArray));
    //(this.taskNo + '  ' + this.taskName + ' ' + this.developerName + 'onStartClick');
    this.router.navigate(['task-list'])
  }
  onStartClick(): void {
    // obj conversion
    console.log(JSON.parse(localStorage.getItem('saved')));
    alert(JSON.parse(localStorage.getItem('saved')));
    this.router.navigate(['TaskListComponent'])

    alert(
      'task no=' +
      this.taskNo +
      ' task name=' +
      this.taskName +
      ' developer id=' +
      this.developerName +
      'onStartClick'
    );

  }
 
  //   onInProgressClick(): void {
  //     alert(this.taskNo + ' ' + this.taskName + 'onStartClick');
  //   }
  //   onWorkDoneClick(): void {
  //     alert(this.taskNo + ' ' + this.taskName + 'onStartClick');
  //   }
}

