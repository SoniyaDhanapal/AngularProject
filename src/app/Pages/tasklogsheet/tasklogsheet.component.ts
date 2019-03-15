import { DoCheck, OnChanges, Component, OnInit, ViewChild, Input, Output } from '@angular/core';
import { HeroModel, test } from './../../module/Hero'
import { Router } from '@angular/router';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-tasklogsheet',
  templateUrl: './tasklogsheet.component.html',
  styleUrls: ['./tasklogsheet.component.css']
})
//, DoCheck 
export class TasklogsheetComponent implements OnInit{
 
  @ViewChild('textbox') mytextbox: any
  // @Input
  // @Input() taskInput: any;
  
  taskNo: any;
  taskName: any;
  developerName: any;
  listOfDeveopers: HeroModel[] = [];
  constructor(private router: Router) { }
  //Input()
  // ngOnChanges() {
  //   console.log(this.taskInput);
  // }

  // ngDoCheck() {
  //   if (this.taskInput !== undefined) {
  //     console.log(this.taskInput);
  //     this.taskName = this.taskInput.taskName;
  //     this.taskNo = this.taskInput.taskNo;
  //     this.developerName = this.taskInput.developerName;
  //   }
  // }

  ngOnInit() {
    this.listOfDeveopers = test; // Developers;
    console.log(this.mytextbox);
  }

  onWidgetChange(): void { }

  onAssignToDeveloperClick(): void {
    // this.taskNo++;
    console.log(this.mytextbox);
    let itemsArray = [];
    const local = JSON.parse(localStorage.getItem('saved'));
    if (local != null) {

      if (local.length > 0) {
        itemsArray = JSON.parse(localStorage.getItem('saved'));
      }
    }

    const myObj = {
      taskNo: this.taskNo,
      taskName: this.taskName,
      developerName: this.developerName
    };
    itemsArray.push(myObj)

    localStorage.setItem('saved', JSON.stringify(itemsArray));
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

}

