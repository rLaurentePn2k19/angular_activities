import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormArray } from '@angular/forms';

export interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-practice-forms',
  templateUrl: './practice-forms.component.html',
  styleUrls: ['./practice-forms.component.css']
})
export class PracticeFormsComponent implements OnInit {

  // hide = true;

  gender: Category[] = [
    { value: 'Male', viewValue: 'Male' },
    { value: 'Female', viewValue: 'Female' },
  ];

  constructor() { }

  ngOnInit() {
  }


  submitInfo(){
    console.log("test")
  }
}
