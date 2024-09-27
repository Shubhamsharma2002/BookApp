import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  fb = inject(FormBuilder)
  authService = inject(AuthService)
  router = inject(Router)
  loginForm !: FormGroup


  ngOnInit():void{
    this.loginForm = this.fb.group({
      email:['', Validators.compose([Validators.required,Validators.email])],
      password:['', Validators.required],
    },
  )  
   }

  login(){
    this.authService.loginService(this.loginForm.value)
    .subscribe({
      next:(res)=>{
        alert("user loged in");
        console.log(localStorage)
        localStorage.setItem("user_id", res.data.user._id)
        this.authService.isLogedIn$.next(true)
        this.router.navigate(["home"])
        this.loginForm.reset();
      },
      error:(err)=>{
        console.log(err);
        alert(err.Error)
      }
    })
  }
}
