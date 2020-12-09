import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { EmployeeSkills } from "./dto/employee-skills";
import { TableData } from "./dto/table-data";

@Injectable({
  providedIn: "root",
})
export class GlobelServiceService {
  employyeData: TableData[] = [];

  users = [
    {
      username: "Jayesh",
      password: "Jayesh",
    },
    {
      username: "Admin",
      password: "Admin",

    }
  ];

  constructor(private http:HttpClient) {}

  user: any;
  setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  removeLocalStorage(key){
    return (localStorage.removeItem(key))
  }
  isLogin() {
    let user = this.getLocalStorage("activeUser");
    if (user && user.username && user.password) {
      return true;
    } else {
      return false;
    }
  }

dummyAPIData(){
  return this.http.get('https://reqres.in/api/users?page=2')
}

}
