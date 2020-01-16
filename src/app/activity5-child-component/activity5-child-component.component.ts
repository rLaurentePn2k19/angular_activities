import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { info } from '../activity5-parent-component/information';

@Component({
  selector: 'app-activity5-child-component',
  templateUrl: './activity5-child-component.component.html',
  styleUrls: ['./activity5-child-component.component.css']
})
export class Activity5ChildComponentComponent implements OnInit {

  @Input() dataFromParent: info;
  @Output() notificationEvent = new EventEmitter();
  @Output() declinedEvent = new EventEmitter();
  public message: string;

  public listOfDeclines = [];
  public listOfApproves = [];

  constructor() { }

  ngOnInit() {
  }

  approve() {
    this.message = "Application was approved"
    this.notificationEvent.emit(this.message)
    // console.log(this.dataFromParent)
    this.listOfApproves.push(this.dataFromParent);
    console.log(this.listOfApproves)
  }

  decline() {
    this.message = "Application was declined"
    this.notificationEvent.emit(this.message)
    this.listOfDeclines.push(this.dataFromParent);
    this.declinedEvent.emit(this.listOfDeclines)
    console.log(this.listOfDeclines)
  }

}
