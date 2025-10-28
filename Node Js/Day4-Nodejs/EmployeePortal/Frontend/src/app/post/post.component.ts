import { Component } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  constructor(private apiService:ApiService){}

  apiData : any;

  ngOnInit(){
    this.apiService.retreiveData()
    .subscribe(res=>{
      this.apiData = res;
      console.log(this.apiData);
    })
  }
}
