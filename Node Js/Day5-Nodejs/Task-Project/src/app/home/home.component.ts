import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private dataservice:DataService){}
  message:any;
  ngOnInit(){
    this.dataservice.getData()
    .subscribe((data)=>{
      this.message = data;
      console.log("message : " ,data);
    })
  }
}
