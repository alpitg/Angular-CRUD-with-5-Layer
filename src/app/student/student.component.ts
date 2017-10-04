import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import { Router } from '@angular/router';

import { CountryService } from '../services/country-service';
import { Country } from '../country';
import { State } from '../state';

import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

   foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  public students: Students[];

  //form
  fStudentData: FormGroup;

  //EDIT FORM
  fStudentEditData: FormGroup;

  studentUpdateDate: Object;

  Id: number;
  NameEdit: string;
  EmailEdit: string;
  AgeEdit: number;

  //Validation
  Name = ['', [Validators.required]];
  Email = ['', [Validators.required, Validators.email]];
  Age = ['', Validators.required];

  //Validation
  e_Name = ['', [Validators.required]];
  e_Email = ['', [Validators.required, Validators.email]];
  e_Age = ['', Validators.required];



  constructor(private DataService: DataService, private formBuilder: FormBuilder, private _countryService: CountryService) {
    this.countries = this._countryService.getCountries();
  }


  ngOnInit() {

    //TODO: Add Student Form
    this.fStudentData = this.formBuilder.group({

      Name: this.Name,
      Email: this.Email,
      Age: this.Age

    });

    //TODO: Edit Student Form
    this.fStudentEditData = this.formBuilder.group({

      Name: this.e_Name,
      Email: this.e_Email,
      Age: this.e_Age
    });

    //GetAllStudents
    this.DataService.getAllStudents().subscribe((posts) => {
      this.students = posts;
      console.log(this.students);

    });
  }

  //1st call
  onStudentModelClick(updateStudent: any) {
    // alert(updateStudent);
    this.studentUpdateDate = updateStudent;
    console.log(this.studentUpdateDate);
    this.Id = updateStudent.id;

    this.NameEdit = updateStudent.name;
    this.EmailEdit = updateStudent.email;
    this.AgeEdit = updateStudent.age;

  }

  //2nd call
  //UPDATE: STUDENTBYID
  onStudentEditById(studentData: any) {
    console.log(studentData.value);
    let idValue = studentData.value;
    console.log(this.Id);

    this.DataService.putStudentById(this.Id, studentData.value).subscribe((posts) => {
      console.log(posts);
      if (posts)
        window.location.reload();
    });

    console.log('Update Hit');

  }

  //ADD: STUDENT
  onAddStudent(studentData: any) {

    console.log(studentData.value);

    this.DataService.postStudent(studentData.value).subscribe((posts) => {
      console.log(posts);
      if (posts)
        window.location.reload();
    });


  }

  //DELETE: STUDENTBYID
  studentDeleteById(studentId: number) {
    console.log(studentId);

    this.DataService.deleteStudentById(studentId).subscribe((posts) => {
      console.log(posts);

      //TODO: Refresh page
      if (posts)
        window.location.reload();
    });

  }

  //Dropdown

  selectedCountry: Country = new Country(0, 'India');
  countries: Country[];
  states: State[];

  onSelect(countryid) {
    this.states = this._countryService.getStates().filter((item) => item.countryid == countryid);
  }

  //Dropdown




}









interface Students {
  id: number,
  name: string,
  email: string,
  age: number
}