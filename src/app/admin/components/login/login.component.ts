import { switchMap, tap, catchError } from 'rxjs/operators';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private userSub: Subscription;

  error: Error;
  isLoading = false;

  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.isLoading = true;
    console.log(this.form);
    this.userSub = this.authService
      .loginCheck(this.form.value.username, this.form.value.password)
      .pipe(
        switchMap((res) => {
          return this.authService.checkCredentials(res.token);
        }),
        catchError((err) => {
          this.error = err;
          this.isLoading = false;
          return this.authService.checkCredentials();
        }),
        tap(() => {
          this.isLoading = false;
        })
      )
      .subscribe((res) => {
        if (res) {
          this.router.navigate(['/admin']);
        }
      });
  }

  ngOnDestroy(): void {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
  }
}
