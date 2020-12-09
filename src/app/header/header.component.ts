import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GlobelServiceService } from "../globel-service.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(private serivce: GlobelServiceService, public router: Router) {}

  ngOnInit(): void {}

  logOut() {
    this.serivce.removeLocalStorage("activeUser");
    this.router.navigate(["login"]);
  }

  List() {
    if(!this.serivce.isLogin()){
      alert('Login is mandetory')
    }
    this.router.navigate(["viewForm"]);
  }
  navigate(){
this.router.navigate(['dropdownTask'])
}
 
}
