import { Component, Input, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
} from "@angular/forms";
import { Router } from "@angular/router";
import { __await } from "tslib";
import { EmployeeSkills } from "../dto/employee-skills";
import { GlobelServiceService } from "../globel-service.service";
@Component({
  selector: "app-registration-form",
  templateUrl: "./registration-form.component.html",
  styleUrls: ["./registration-form.component.scss"],
})
export class RegistrationFormComponent implements OnInit {
  employeeSkills: any = [
    { name: "HTML", checked: false },
    { name: "CSS", checked: false },
    { name: "JavaScript", checked: false },
    { name: "Angular", checked: false },
    { name: "PHP", checked: false },
  ];
  EmployeeGender = ["Male", "Female", "Other"];
  Countries = ["INDIA", "USA", "CANADA", "SINGAPUR", "UK", "FRANCE"];
  employeeExp = ["0-1", "1-3", "3-6"];
  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private service: GlobelServiceService
  ) {
    this.employeeForm = this.fb.group({
      userName: [
        "",
        [Validators.required, Validators.pattern("^[aA-zZ]\\w{3,29}$")],
      ],
      emailAddress: [
        "",
        [
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
        ],
      ],
      mobileNumber: [
        "",
        [Validators.required, Validators.pattern("[7-9][0-9]{9}")],
      ],
      gender: [null, Validators.required],
      currentLocation: ["", Validators.required],
      country: [null, Validators.required],
      experience: ["", Validators.required],
      skills: [[...this.employeeSkills]],
    });
  }

  selectedSkills: any[] = [];
  url: any;
  ngOnInit(): void {
    if (this.router.url.includes("edit")) {
      this.employeeSkills;
      this.patchvalue();
    }
  }

  selectSkills(value, status: boolean, index) {
    let data = this.employeeForm.get("skills").value;
    console.log(value, index, status);
    data[index].checked = status;
    this.employeeForm.get("skills").patchValue([...data]);
  }

  async patchvalue() {
    this.url = this.router.url.split("/");
    let formData = this.service.employyeData;
    this.employeeForm.patchValue(formData[this.url[2]]);
    this.employeeForm.patchValue({
      username:this.employeeForm.controls.userName
    });
  }

 

  Update() {
    let formData = this.service.employyeData;

    if (this.router.url.includes("edit"))
      formData[this.url[2]] = { ...this.employeeForm.value };
    this.router.navigate(["viewForm"]);
  }

  async onSubmit() {
    this.service.employyeData.push({ ...this.employeeForm.value });
    console.log(this.employeeForm.value);
    this.router.navigate(["viewForm"]);
  }

  selectExp(event) {}
  

  
}
