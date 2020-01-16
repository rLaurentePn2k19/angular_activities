import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  public parentData: string;
  public dataFromChild: string;
  public messageToBeSent : string

  constructor() { }

  ngOnInit() {

  }

  sendMessage(message: string) {
    this.messageToBeSent = message
    console.log(message)
  }

}
