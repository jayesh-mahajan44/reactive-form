import { EmployeeSkills } from './employee-skills';

export class TableData {
  country: string;
  currentLocation: string;
  emailAddress: string;
  experience: string;
  gender: string;
  mobileNumber: string;
  skills:EmployeeSkills[];
  userName: string;

  constructor(
    country: string,
    currentLocation: string,
    emailAddress: string,
    experience: string,
    gender: string,
    mobileNumber: string,
    skills: any,
    userName: string
  ) {
      this.country = country;
      this.currentLocation = currentLocation;
      this.emailAddress = emailAddress;
      this.experience = experience;
      this.gender = gender;
      this.mobileNumber = mobileNumber;
      this.skills = skills;
      this.userName = userName ;



  }

}
