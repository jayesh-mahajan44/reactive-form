import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropdownTaskComponent } from './dropdown-task/dropdown-task.component';
import { GuardAuthGuard } from './guard-auth.guard';
import { LoginComponent } from './login/login.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ViewEmployeeFormComponent } from './view-employee-form/view-employee-form.component';


const routes: Routes = [
  {path:'employeeForm',component:RegistrationFormComponent, canActivate: [GuardAuthGuard]  },
  {path:'viewForm',component:ViewEmployeeFormComponent, canActivate: [GuardAuthGuard] },
  { path:'edit/:id', component:RegistrationFormComponent,canActivate: [GuardAuthGuard] },
  {path:'dropdownTask', component:DropdownTaskComponent},
  {path : 'login',component:LoginComponent},
  {path:'',redirectTo:'login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
