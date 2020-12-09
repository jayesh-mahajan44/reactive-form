import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dropdown-task',
  templateUrl: './dropdown-task.component.html',
  styleUrls: ['./dropdown-task.component.scss']
})
export class DropdownTaskComponent implements OnInit {

  form:FormGroup
  constructor() { }

  ngOnInit(): void {

    this.form = new FormGroup({
      
   

      Dist: new FormControl(null),
      State: new FormControl(null),
      Country: new FormControl(null)
    
    })
  }

  data = [
    {
      country: 'India',
      State : 'Maharashtra',
      Dist : 'Dhule',
      disabled :true,
      id : '100'
    },
    {
      country: 'India',
      State : 'Gujrat',
      Dist : 'Surat',
      disabled :true,
      id : '122'
    },
    {
      country: 'India',
      State : 'Karnatka',
      Dist : 'Banglore',
      disabled :true,
      id : '22'
    },
    {
      country: 'NA',
      State : 'NA',
      Dist : 'NA',
      disabled :true,
      id : '4'
    }
  ] 

  // Dist = [{
  //   "id": 1,
  //   "DistName": "Dhule"
  // }, {
  //   "id": 2,
  //   "DistName": "Raigarh"
  // }, {
  //   "id": 3,
  //   "DistName": "Surat"
  // }, {
  //   "id": 4,
  //   "DistName": "Indore"
  // }, {
  //   "id": 5,
  //   "DistName": "Banglore"
  // }]

  // State = [{
  //   "id": 1,
  //   "StateName": "Karntaka"
  // }, {
  //   "id": 2,
  //   "StateName": "Maharashtra"
  // }, {
  //   "id": 3,
  //   "StateName": "Madhya Pradesh"
  // }, {
  //   "id": 4,
  //   "StateName": "Gujrat"
  // }
  // ]

  // PinCode = [{
  //   "id": 1,
  //   "PincodeNumber": "424001 "
  // }, {
  //   "id": 2,
  //   "PincodeNumber": "Dara"
  // }, {
  //   "id": 3,
  //   "PincodeNumber": "Kerwinn"
  // }, {
  //   "id": 4,
  //   "PincodeNumber": "Penny"
  // }, {
  //   "id": 5,
  //   "PincodeNumber": "Carmelle"
  // }]




  

  selectDist(event){
   
    let temp = event.target.value;
    let a = this.data.find(x=>x.Dist == temp )

   if(a.Dist == "NA"){

// this.form.get('State').patchValue({disabled:true})
// this.form.get('Country').patchValue({disabled:true})
this.form.get('State').patchValue(a.State);
this.form.get('Country').patchValue(a.country);
this.form.get('State').disable()
this.form.get('Country').disable()

// this.form.get('Country').patchValue({value:null,disabled:true})


   }
   else{
    this.form.get('State').patchValue(a.State);
    this.form.get('Country').patchValue(a.country);
    this.form.get('State').enable()
    this.form.get('Country').enable()
  
   }
   

  }

  selectState(event){
    let temp = event.target.value;
    let a = this.data.find(x=>x.State == temp )
  
    this.form.get('Country').patchValue(a.country);
  }
  selectCountry(event){

  }


  submit(){
    let a = this.data.find(x=>x.Dist == this.form.get('Dist').value)
    console.log(a.id)
  }

}
