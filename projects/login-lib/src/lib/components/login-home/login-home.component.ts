import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'log-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent implements OnInit {

  user: string;
  password: string;
  returnUrl: string;

  constructor(private authenticationService: AuthenticationService, private route: ActivatedRoute, private messageService: MessageService,
    private router: Router) {

  }

  /**
   * Init the app, reset the logout and the form.
   */
  ngOnInit(): void {
    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.initForm();
  }

  /**
   * Reset the login form
   */
  initForm(): void {
    this.user = '';
    this.password = '';
  }

  /**
   * Petition to the authenticationService to log in the application
   */
  login(): void {
    this.authenticationService.login(this.user, this.password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
          this.messageService.add({
            severity: 'success', summary: 'Login',
            detail: 'User ' + this.user + ' Logged'
          });
        },
        error => {
          this.messageService.add({ severity: 'error', summary: 'Login', detail: 'Incorrect Credentials' });
        });
  }

}
