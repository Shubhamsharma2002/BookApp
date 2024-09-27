import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule, RouterModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent implements OnInit{
  fb = inject(FormBuilder)
  authService = inject(AuthService)
  router = inject(Router)
  forgetForm !: FormGroup

 ngOnInit(): void {
   this.forgetForm=this.fb.group({
    email:['', Validators.compose([Validators.required,Validators.email])]
   })
 }

  forget(){
    this.authService.sendEmailService(this.forgetForm.value.email)
    .subscribe({
      next:(res)=>{
        alert(res.message)
        this.forgetForm.reset();
      },
      error:(err)=>{
        alert(err.error.message)
      }
    })
}
}
