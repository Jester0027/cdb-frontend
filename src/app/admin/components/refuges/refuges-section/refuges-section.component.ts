import { MatDialog } from '@angular/material/dialog';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { AdminRefugesService } from '../../../services/admin-refuges.service';
import { DeleteDialogComponent } from '../../delete-dialog/delete-dialog.component';
import { UserRoles } from '../../../../models/user.model';
import { AuthService } from '../../../services/auth.service';
import { Meta, PaginatedData } from '../../../../models/paginated-data.model';
import { Refuge } from '../../../../models/animals/refuge.model';
import { RefugesService } from '../../../../services/refuges.service';

@Component({
  selector: 'app-refuges-section',
  templateUrl: './refuges-section.component.html',
  styleUrls: ['./refuges-section.component.scss'],
})
export class RefugesSectionComponent implements OnInit, OnDestroy {
  private refugesSub: Subscription;
  private dialogRefSub: Subscription;
  isLoading = false;
  refuges: Refuge[];
  meta: Meta;
  error: string = null;
  isAdmin = false;

  constructor(
    private refugesService: RefugesService,
    private adminRefugesService: AdminRefugesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.getUser().roles.includes(UserRoles.SUPERADMIN);
    this.refugesSub = this.activatedRoute.queryParams
      .pipe(
        switchMap((params) => {
          this.isLoading = true;
          return this.refugesService.fetchRefuges(params.page);
        })
      )
      .subscribe(
        (res: PaginatedData<Refuge>) => {
          this.isLoading = false;
          this.refuges = res.data;
          this.meta = res.meta;
          console.log(res);
        },
        (error: Error) => {
          this.isLoading = false;
          this.error = error.message;
          this.router.navigate(['/admin', 'not-found']);
        }
      );
  }

  ngOnDestroy(): void {
    if (this.refugesSub) {
      this.refugesSub.unsubscribe();
    }
    if (this.dialogRefSub) {
      this.dialogRefSub.unsubscribe();
    }
  }

  openDeleteDialog(id: string, name: string) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { id, name, obs$: this.adminRefugesService.delete(id) },
    });

    this.dialogRefSub = dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.refuges = this.refuges.filter(a => a.id !== id);
      }
    });
  }

  onPageChange(e) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { page: e.pageIndex + 1 },
      queryParamsHandling: 'merge',
    });
  }
}
