import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
     fb = inject(FormBuilder)
     registerForm !: FormGroup

     ngOnInit():void{
      this.registerForm = this.fb.group({
        UserName:['',Validators.required],
        FullName :['',Validators.required],
        email:['', Validators.compose([Validators.required,Validators.email])],
        Password:['', Validators.required],
  

      },

    )  
     }


     rigestrer(){
       console.log(this.registerForm.value);
     }
     
}
