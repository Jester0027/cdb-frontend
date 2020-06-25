import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-password-change-page',
  templateUrl: './password-change-page.component.html',
  styleUrls: ['./password-change-page.component.scss']
})
export class PasswordChangePageComponent implements OnInit, OnDestroy {
  private activatedRouteSub: Subscription;
  private authSub: Subscription;

  public form: FormGroup;
  public error: string = null;
  public isLoading = false;

  private email: string = null;
  private token: string = null;


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  public ngOnInit(): void {
    this.isLoading = true;
    this.initForm();
    this.activatedRouteSub = this.activatedRoute.queryParams.subscribe(params => {
      this.email = params.email;
      this.token = params.token;
      this.isLoading = false;
    }, err => {
      this.isLoading = false;
      this.error = err.message;
    });
  }

  public ngOnDestroy(): void {
    if (this.activatedRouteSub) {
      this.activatedRouteSub.unsubscribe();
    }
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
  }

  private initForm() {
    this.form = this.fb.group({
      password: ['', [Validators.required]],
      cPassword: ['', [Validators.required]]
    });
  }

  public onSubmit() {
    const payload = {
      email: this.email,
      token: this.token,
      password: this.form.get('password').value
    };
    this.isLoading = true;
    this.authService.passwordChange(payload).subscribe(() => {
      this.isLoading = false;
      this.authService.logout();
    }, err => {
      this.isLoading = false;
      this.error = err.message;
    });
  }

  public matchingPassword(): boolean {
    return this.form.get('password').value === this.form.get('cPassword').value;
  }

}
