import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { ViewEmployeeFormComponent } from './view-employee-form/view-employee-form.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { from } from 'rxjs';
import { DropdownTaskComponent } from './dropdown-task/dropdown-task.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    ViewEmployeeFormComponent,
    LoginComponent,
    HeaderComponent,
    DropdownTaskComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
