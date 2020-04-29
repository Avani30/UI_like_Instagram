import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { 
    
  }
  myClickFunction(){
    console.log("workingggg")
   
  }

  ngOnInit(): void {
  }
  
  // myClickFunction(){
  //   console.log("workingggg")
   
  // }

}

// class AdminTS {
//   constructor() {
//     let btn = document.getElementById("x");
//     btn.addEventListener("Click", (e:Event) => alert('hii'))
//   }
 
// }

// // start the app
// new AdminTS();
