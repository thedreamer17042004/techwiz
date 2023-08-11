import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/service/category.service';
import { NotificationsService } from 'src/app/service/notifications.service';
declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private serve:CategoryService, private _route:Router,private _http:HttpClient
    ,private toastr: ToastrService,private notifyService :NotificationsService
    ){}
  loginF: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  get f() {
    return this.loginF.controls;
  }
  ngOnInit(): void {

  }


  onSubmit(loginF:FormGroup) {
    if(this.loginF.invalid) return;
       this.serve.getUsers().subscribe((res:any)=>{
           const user = res.find((a:any)=>{
           return a.email === this.loginF.value.email && a.password === this.loginF.value.password
         });
         if(user){
           this.notifyService.showSuccessWithTimeout("Logined successfully", "Notification", 1000)
           this.loginF.reset();
           this._route.navigate(['']);
   
         }else{
           this.notifyService.showfalse("Login failed", "Notification", 1009)
           this._route.navigate(['login']);
         }
       }, err=>{
        this.notifyService.showfalse("Something went wrong", "Notification", 1009)

       })
      
   
     
  }
}
