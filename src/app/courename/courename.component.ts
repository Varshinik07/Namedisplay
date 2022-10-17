import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-courename',
  templateUrl: './courename.component.html',
  styleUrls: ['./courename.component.css']
})
export class CourenameComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
    this.myapi.viewname().subscribe(
      (data:any)=>{
        console.log("response"+data)
         this.name=data
      }
    )
   }
name=" "
  ngOnInit(): void {
  }

}
