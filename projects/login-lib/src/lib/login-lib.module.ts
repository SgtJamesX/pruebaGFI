import { NgModule } from '@angular/core';
import { LoginLibComponent } from './login-lib.component';
import { LoginHomeComponent } from './components/login-home/login-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [LoginLibComponent, LoginHomeComponent],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    ToastModule
  ],
  providers: [
    MessageService],
  exports: [LoginLibComponent]
})
export class LoginLibModule { }
