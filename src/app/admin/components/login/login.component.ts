import { switchMap } from 'rxjs/operators';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformServer, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private userSub: Subscription;

  isLoading;

  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form);
    this.userSub = this.authService
      .loginCheck(this.form.value.username, this.form.value.password)
      .pipe(
        switchMap((res) => {
          return this.authService.checkCredentials(res.token);
        })
      )
      .subscribe((res) => {
        if (res.username) {
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
