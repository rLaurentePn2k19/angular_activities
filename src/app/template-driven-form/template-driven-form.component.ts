import { Component, OnInit} from '@angular/core';
import { Person } from '../reactive-form/person';


@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  public dEmail : string
  public fullname: string
  public dGender: string = "Gender"
  public dangerColor = "red"
  public successColor = "green"
  public information = new Array<Person>();
  show = false;

  constructor() { }

  ngOnInit() {
    
  }

  onSubmit(){
    this.show = !this.show;
    var personInfo = {
      name : this.fullname,
      email : this.dEmail,
      gender : this.dGender
    }
    this.information.push(personInfo)
  }

  onEdit(){
    this.show = false
    this.information = new Array<Person>();
  }
}
