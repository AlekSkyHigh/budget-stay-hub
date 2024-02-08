import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  errorMessage: any;
  validateEmail: boolean = true;

  constructor(
    private authService: AuthService,
    private sessionService: SessionService,
    private router: Router) { }

    loginUser(form: NgForm) {

      if (form.invalid) {
        return;
      }
      const { email, password } = form.value;
  
      this.authService.login(email, password)
        .subscribe({
          next: (response: any) => {
            const token = response;
  
            this.sessionService.createSession(token);
  
            this.router.navigate(['/']);
          },
          error: (error) => {
            this.errorMessage = error.error.message;
          }
        });
    }
}
