import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {


  constructor(public http: Http) {
    console.log('Data Service Connected...');
  }

  //GET 
  getAllStudents() {
    return this.http.get('http://localhost:53811/api/Student/GetAllStudent')
      .map(res => res.json());
  }

  //GET BY ID
  getStudentById(id: any) {
    return this.http.get('http://localhost:53811/api/Student/GetStudentById/' + id)
      .map((res: Response) => res.json());
  }


  //POST
  postStudent(registerStudent: any) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:53811/api/Student/AddStudent/', JSON.stringify(registerStudent), options)
      .map(res => res.json());
  }

  //PUT
  putStudentById(id: any, updateStudent: any) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    //FOR : To handle Unsupported media type error-->( Add options )<-----
    //return this.http.put('http://localhost:58077/api/Home/'+id,JSON.stringify(updateStudent),options)
    return this.http.put('http://localhost:53811/api/Student/UpdateStudent/' + id, JSON.stringify(updateStudent), options)
      .map(res => res.json());
  }

  //DELETE
  deleteStudentById(id: any) {
    return this.http.delete('http://localhost:53811/api/Student/DeleteStudentById/' + id)
      .map((res: Response) => res.json());
  }


}
