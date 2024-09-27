import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
           authService = inject(AuthService);
           isLogedIn : boolean = false

    ngOnInit(): void {
      this.authService.isLogedIn$.subscribe(res =>{
       this.isLogedIn = this.authService.isLogedIn();
      })
    }

           logout(){
               localStorage.removeItem("user_id")
               this.authService.isLogedIn$.next(false)
           }
}
