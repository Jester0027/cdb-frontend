import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lost-password-page',
  templateUrl: './lost-password-page.component.html',
  styleUrls: ['./lost-password-page.component.scss']
})
export class LostPasswordPageComponent implements OnInit, OnDestroy {
  private authSub: Subscription;
  public form: FormGroup;
  public error: string = null;
  public isLoading = false;
  public submitMessage: string = null;

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  public ngOnInit(): void {
    this.initForm();
  }

  public ngOnDestroy(): void {
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
  }

  private initForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required]]
    });
  }

  public onSubmit() {
    this.isLoading = true;
    this.authService.sendPasswordRecovery(this.form.value)
      .subscribe(() => {
        this.isLoading = false;
        this.submitMessage = 'Votre demande a bien été envoyée, consultez vos mails';
      }, (err) => {
        this.isLoading = false;
        this.error = err.message;
      });
  }

}
