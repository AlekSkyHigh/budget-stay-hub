import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  register(email: string, password: string, firstName: string, lastName: string) {
    return this.http.post(environment.apiUrl + 'users/register', { email, password, firstName, lastName });
  }

  login(email: string, password: string) {
    return this.http.post(environment.apiUrl + 'users/login', { email, password });
  }

  logout() {
    return this.http.get(environment.apiUrl + 'users/logout')
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check if the token exists and is valid
    return !!token;
  }

}