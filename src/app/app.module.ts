import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';

import { ChildComponentComponent } from './child-component/child-component.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { Activity5ChildComponentComponent } from './activity5-child-component/activity5-child-component.component';
import { Activity5ParentComponentComponent } from './activity5-parent-component/activity5-parent-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestGridComponent } from './test-grid/test-grid.component';
import { PracticeFormsComponent } from './practice-forms/practice-forms.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component'


@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    ParentComponentComponent,
    Activity5ChildComponentComponent,
    Activity5ParentComponentComponent,
    TestGridComponent,
    PracticeFormsComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    MatIconModule,
    ReactiveFormsModule,
    DragDropModule,
    MatExpansionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatSliderModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
