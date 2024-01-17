import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from "./core/footer/footer.component";
import { LoginComponent } from './core/pages/login/login.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NavbarComponent,
        FooterComponent,
        LoginComponent,
    ]
})
export class AppModule { }
