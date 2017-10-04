import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { StudentComponent } from './student/student.component';
import { DataService } from "./services/data.service";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatInputModule,
  MatCardModule,
  MatTableModule,
  MatDialogModule,
  MatSelectModule

} from '@angular/material';
import { CountryService } from "./services/country-service";
@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DataService,
    CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
