import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminUsersService } from '../../../services/admin-users.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {
  public form: FormGroup;
  public error: string = null;
  public isLoading = false;

  constructor(
    private fb: FormBuilder,
    private adminUsersService: AdminUsersService,
    private matDialogRef: MatDialogRef<UsersFormComponent>
  ) {
  }

  public ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]]
    });
  }

  private resetForm() {
    this.form.get('email').setValue('');
  }

  public onSubmit() {
    this.adminUsersService.add(this.form.get('email').value).subscribe(() => {
      this.matDialogRef.close(true);
    }, err => {
      this.error = err.message;
    });
  }

}
