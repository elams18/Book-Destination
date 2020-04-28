import { Component, OnInit } from '@angular/core';

import { UserService } from '../shared/user.service'
import { NgForm } from '@angular/forms';

 
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService],
  
})
export class UserComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.resetForm()
  }
  resetForm(form?: NgForm){
    if(form) form.reset();
    this.userService.selectedUser = {
      _id:"",
      name:"",
      userid:"",
      points: 0
    }
  }
  onSubmit(form: NgForm){
    if(form){
      console.log("not empty");
      this.userService.postUser(form.value).subscribe((res)=>{
        this.resetForm(form);
      });
    }
    else{
      console.log("Empty");
    }
  }
}
