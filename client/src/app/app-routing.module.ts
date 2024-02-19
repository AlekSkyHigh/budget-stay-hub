import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { ReservationComponent } from './features/reservation/reservation.component';
import { ContactsComponent } from './features/contacts/contacts.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: 'register', component: RegisterComponent, pathMatch: 'full'},
  { path: 'reservation', component: ReservationComponent, pathMatch: 'full'},
  { path: 'contacts', component: ContactsComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
