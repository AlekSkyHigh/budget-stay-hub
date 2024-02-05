import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(
    public authService: AuthService,
    private sessionService: SessionService,
    private router: Router) { }

  logout(): void {
    this.authService.logout().subscribe({
      next: (data) => {
        //console.log(data);
        this.sessionService.clearSession();
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
