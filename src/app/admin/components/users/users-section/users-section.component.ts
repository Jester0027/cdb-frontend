import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdminUsersService } from '../../../services/admin-users.service';
import { Subscription } from 'rxjs';
import { User, UserRoles } from '../../../../models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../../delete-dialog/delete-dialog.component';
import { UsersFormComponent } from '../users-form/users-form.component';

@Component({
  selector: 'app-users-section',
  templateUrl: './users-section.component.html',
  styleUrls: ['./users-section.component.scss']
})
export class UsersSectionComponent implements OnInit, OnDestroy {
  private usersSub: Subscription;
  private dialogRefSub: Subscription;

  public isLoading = false;
  public error: string = null;
  public users: User[];
  public userRoles = UserRoles;

  constructor(private adminUsersService: AdminUsersService, private dialog: MatDialog) {
  }

  public ngOnInit(): void {
    this.fetchUsers();
  }

  public ngOnDestroy(): void {
    if (this.usersSub) {
      this.usersSub.unsubscribe();
    }
    if (this.dialogRefSub) {
      this.dialogRefSub.unsubscribe();
    }
  }

  private fetchUsers() {
    this.isLoading = true;
    this.usersSub = this.adminUsersService.fetch().subscribe((res: User[]) => {
      this.isLoading = false;
      this.users = res;
    }, err => {
      this.isLoading = false;
      this.error = err.message;
    });
  }

  public openDeleteDialog(id: string, name: string) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {id, name, obs$: this.adminUsersService.delete(id)},
    });

    this.dialogRefSub = dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.fetchUsers();
      }
    });
  }

  public openAddDialog() {
    this.dialog.open(UsersFormComponent);
  }

}
