import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  public dangerColor = "red"
  public successColor = "green"
  userInformation : FormGroup

  show = false;
  
  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.userInformation = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: 
      ['', 
        [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]
      ],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipcode: ['', Validators.required],
      })
    })
  }

  onSubmit() {  
    this.show = !this.show;
  }

  back() {
    this.show = false
  }
}
