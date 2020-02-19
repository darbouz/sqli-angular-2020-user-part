import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AlertSuccessComponent } from './alert-success/alert-success.component';
import { AlertErrorComponent } from './alert-error/alert-error.component';
import { TimerComponent } from './timer/timer.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  imports:      [ BrowserModule, HttpClientModule ],
  declarations: [ AppComponent, UserComponent, AlertSuccessComponent, AlertErrorComponent, TimerComponent, LoginComponent, NavbarComponent, UserFormComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthService]
})
export class AppModule { }
