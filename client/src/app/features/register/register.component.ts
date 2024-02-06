import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/core/services/session.service';
import { NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  errorMessages: string[] = [];
  validateEmail: boolean = true;

  constructor(
    private authService: AuthService,
    private sessionService: SessionService,
    private router: Router) { }

  registerUser(formData: NgForm) {

    if (formData.invalid) {
      return;
    }

    const { email, password, firstName, lastName } = formData.value;

    console.log(email, password, firstName, lastName);
    

    this.authService.register(email, password, firstName, lastName)
      .pipe(
        switchMap(() => this.authService.login(email, password))
      )
      .subscribe({
        next: (response: any) => {
          const token = response;

          this.sessionService.createSession(token)

          this.router.navigate(['/']);
        },
        error: (error) => {
          if (error && error.error && error.error.message) {
            this.errorMessages = error.error.message;
          } else {
            this.errorMessages = ['Unknown error occurred.'];
          }
        }
      });
  }
}
