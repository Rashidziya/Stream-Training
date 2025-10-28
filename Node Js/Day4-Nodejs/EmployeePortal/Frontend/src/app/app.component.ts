import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  value : string = '';
  myForm:FormGroup;
  employeData : any;
  employee ={
    empId:"",
    name:"",
    project:""
  }

  constructor(private employeeService:EmployeeService, private fb:FormBuilder){
    this.myForm = this.fb.group({
      name:['',Validators.required],
      project:['',Validators.required],
      empid:['',Validators.required]
    })
  }
  onSubmit(){
    this.employeeService.saveData(this.employee)
    .subscribe((res)=>{
      console.log("Employee added successfully ",res);
      this.value = "Employee added succesfully";
    },error=>{
      console.log("Error : ",error);
    })
  }
  getEmployee(){
    this.employeeService.getEmployee()
    .subscribe(data=>{
      this.employeData = data;
      console.log("Data fetched successfully ",data);
    },error=>{
      console.log("Error : ",error);
    })
  }
}
