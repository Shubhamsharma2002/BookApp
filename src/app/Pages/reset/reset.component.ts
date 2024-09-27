import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule, RouterModule],
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.css'
})
export class ResetComponent  implements OnInit{

  fb = inject(FormBuilder)
  authService = inject(AuthService)
  router = inject(Router)
  activateRouter = inject(ActivatedRoute)
  resetForm !: FormGroup
  token !: string

  ngOnInit():void{
    this.resetForm = this.fb.group({
     
      password:['', Validators.required],
      confirmpassword:['', Validators.required]
    }) 
    
    this.activateRouter.params.subscribe(val =>{
      this.token = val['token']
      console.log(this.token)
    })
   }

  reset(){
    let resetObj={
      token : this.token,
      password:this.resetForm.value.password
    }
      this.authService.reetPasswordService(resetObj)
      .subscribe({
        next:(res)=>{
          alert(res.message)
          this.resetForm.reset();
          this.router.navigate(['login']);
        },
        error:(err)=>{
          alert(err.error.message)
        }
      })
  }
}
