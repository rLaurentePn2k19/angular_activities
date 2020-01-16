import { Component, OnInit } from '@angular/core';
import { info } from './information';

export interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-activity5-parent-component',
  templateUrl: './activity5-parent-component.component.html',
  styleUrls: ['./activity5-parent-component.component.css']
})
export class Activity5ParentComponentComponent implements OnInit {

  public parentName: string;
  public parentEnrolled: string;
  public parentGender: string;
  public parentInformation: info;

  public dec = [];

  panelOpenState = false;

  gender: Category[] = [
    { value: 'Male', viewValue: 'Male' },
    { value: 'Female', viewValue: 'Female' },
  ];


  constructor() {
    this.parentInformation = new info();
  }

  ngOnInit() {
    // this.parentInformation = { name: "", enrolled: "", gender: ""};
  }

  submitInfo() {
    if (this.parentEnrolled) {
      this.parentEnrolled = "Yes"
    } else {
      this.parentEnrolled = "No"
    }
    this.parentInformation = {
      name: this.parentName,
      enrolled: this.parentEnrolled,
      gender: this.parentGender
    }
  }
}
