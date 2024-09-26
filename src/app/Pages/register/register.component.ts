import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
     fb = inject(FormBuilder)
     authService = inject(AuthService)
     router = inject(Router)
     registerForm !: FormGroup

     ngOnInit():void{
      this.registerForm = this.fb.group({
        username:['',Validators.required],
        fullname :['',Validators.required],
        email:['', Validators.compose([Validators.required,Validators.email])],
        password:['', Validators.required],
  

      },

    )  
     }


     rigestrer(){
       this.authService.registerService(this.registerForm.value).subscribe({
        next:(res) =>{
          alert("user cretaed")
          this.registerForm.reset();
          this.router.navigate(['login'])
        },
        error:(err)=>{
          console.log(err);
        }
       })
     }
     
}
