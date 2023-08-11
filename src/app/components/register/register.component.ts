import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/service/category.service';
import { NotificationsService } from 'src/app/service/notifications.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private serve:CategoryService, private _route:Router,private _http:HttpClient
    ,private toastr: ToastrService,private notifyService :NotificationsService
    ){}
  signF: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  get f() {
    return this.signF.controls;
  }
  ngOnInit(): void {

  }

  onSubmit(signF:FormGroup) {
    if(this.signF.invalid) return;
      this.serve.postUser(this.signF.value).subscribe(res=>{
        this.notifyService.showSuccessWithTimeout("Registered successfully", "Notification", 1000)
        this.signF.reset();
        this._route.navigate(['']);
      }, err=>{
        this.notifyService.showfalse("Something went wrong", "Notification", 1009)
      })
       
  }
}
