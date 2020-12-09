import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GlobelServiceService } from "../globel-service.service";

@Component({
  selector: "app-view-employee-form",
  templateUrl: "./view-employee-form.component.html",
  styleUrls: ["./view-employee-form.component.scss"],
})
export class ViewEmployeeFormComponent implements OnInit {
  list: Array<any>;
  skill: any;
  constructor(private service: GlobelServiceService, private router: Router) {}

  ngOnInit(): void {
    this.list = this.service.employyeData;
  

    console.log(this.list);
  }
  editForm(value, id) {
    let path = value + (id == 0 || id ? "/" + id : "");

    this.router.navigate([path]);
  }

  addEmployee() {
    this.router.navigate(["employeeForm"]);
  }
  deleteEmployee(index) {
    this.service.employyeData.splice(index, 1);
  }
}
