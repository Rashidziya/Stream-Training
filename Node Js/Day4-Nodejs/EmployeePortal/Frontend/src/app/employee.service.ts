import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = "http://localhost:4040/employee";
  constructor(private http:HttpClient) { }
  saveData(emp : any){
    return this.http.post(this.url,emp);
  }
  getEmployee(){
    return this.http.get("http://localhost:4040/getEmp");
  }
}
