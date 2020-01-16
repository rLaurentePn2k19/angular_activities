import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input() dataFromParent: string;
  @Output() childEvent = new EventEmitter();
  public childData: string;

  constructor() { }

  ngOnInit() {

  }
  // onChange(value : string){
  //   this.childEvent.emit(value);
  // }

  replyMessage(message : string) {
    this.childEvent.emit(message);
    console.log(message)
  }

}
