import { EventThemesFormComponent } from '../event-themes-form/event-themes-form.component';
import { DeleteDialogComponent } from '../../delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AdminEventThemesService } from '../../../services/admin-event-themes.service';
import { tap, switchMap } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';
import { EventThemesService } from '../../../../services/event-themes.service';
import { EventTheme } from '../../../../models/events/event-theme.model';
import { AuthService } from '../../../services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserRoles } from 'src/app/models/user.model';

@Component({
  selector: 'app-event-themes-display',
  templateUrl: './event-themes-display.component.html',
  styleUrls: ['./event-themes-display.component.scss'],
})
export class EventThemesDisplayComponent implements OnInit, OnDestroy {
  private themesSub: Subscription;
  private dialogRefSub: Subscription;
  isAdmin = false;
  isLoading = false;
  error: string = null;
  themes: EventTheme[];

  constructor(
    private authService: AuthService,
    private eventThemesService: EventThemesService,
    private adminEventThemesService: AdminEventThemesService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.isAdmin = this.authService
      .getUser()
      .roles.includes(UserRoles.SUPERADMIN);

    this.themesSub = this.eventThemesService
      .fetchEventThemes()
      .subscribe((themes: EventTheme[]) => {
        this.isLoading = false;
        this.themes = themes;
      });
  }

  ngOnDestroy(): void {
    if (this.themesSub) {
      this.themesSub.unsubscribe();
    }
    if (this.dialogRefSub) {
      this.dialogRefSub.unsubscribe();
    }
  }

  private regenerateThemes(res) {
    if (res) {
      this.themesSub = this.eventThemesService
        .fetchEventThemes()
        .subscribe((themes: EventTheme[]) => (this.themes = themes));
    }
  }

  openAddDialog(id: string = null, name: string = null) {
    const dialogRef = this.dialog.open(EventThemesFormComponent, {
      data: {id, name},
    });

    this.dialogRefSub = dialogRef
      .afterClosed()
      .pipe(
        switchMap((res) => {
          if (res) {
            this.isLoading = true;
            return this.eventThemesService.fetchEventThemes();
          }
          return of(null);
        })
      )
      .subscribe((res) => {
        if (res) {
          this.isLoading = false;
          this.themes = res;
        }
      });
  }

  openDeleteDialog(id: string, name: string) {
    this.dialog.open(DeleteDialogComponent, {
      data: {
        id,
        name,
        obs$: this.adminEventThemesService
          .delete(id)
          .pipe(tap(this.regenerateThemes.bind(this))),
      },
    });
  }
}
