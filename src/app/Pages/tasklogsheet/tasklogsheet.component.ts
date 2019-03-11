import { Component, OnInit } from '@angular/core';
import { HeroModel , test } from './../../module/Hero'
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasklogsheet',
  templateUrl: './tasklogsheet.component.html',
  styleUrls: ['./tasklogsheet.component.css']
})
export class TasklogsheetComponent implements OnInit {
  taskNo: any;
  taskName = "Test Task";
  developerName = 0;
  listOfDeveopers: HeroModel[] = [];
  constructor(private router: Router) {}

  ngOnInit() {
    this.listOfDeveopers = test; // Developers;
    this.taskNo = JSON.parse(localStorage.getItem("saved")).taskNo;
    this.developerName = JSON.parse(
      localStorage.getItem("saved")
    ).developerName;
  }

  onWidgetChange(): void {}

  onAssignToDeveloperClick(): void {
    // this.taskNo++;
    const myObj = {
      taskNo: this.taskNo,
      taskName: this.taskName,
      developerName: this.developerName
    };
    localStorage.setItem("saved", JSON.stringify(myObj));
    alert(this.taskNo + " " + this.taskName + "onStartClick");
    debugger;
    this.router.navigate(['/TaskListComponent']);
  }
  onStartClick(): void {
    // obj conversion
    console.log(JSON.parse(localStorage.getItem("saved")));
    alert(JSON.parse(localStorage.getItem("saved")));

    alert(
      "task no=" +
        this.taskNo +
        " task name=" +
        this.taskName +
        " developer id=" +
        this.developerName +
        "onStartClick"
    );
  }
  onInProgressClick(): void {
    alert(this.taskNo + " " + this.taskName + "onStartClick");
  }
  onWorkDoneClick(): void {
    alert(this.taskNo + " " + this.taskName + "onStartClick");
  }
}

