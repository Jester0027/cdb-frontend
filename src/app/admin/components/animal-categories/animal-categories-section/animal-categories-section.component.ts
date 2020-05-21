import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { tap, switchMap } from 'rxjs/operators';
import { UserRoles } from 'src/app/models/user.model';

import { AuthService } from './../../../services/auth.service';
import { AdminAnimalCategoriesService } from './../../../services/admin-animal-categories.service';
import { DeleteDialogComponent } from './../../delete-dialog/delete-dialog.component';
import { AnimalCategory } from './../../../../models/animals/animal-category.model';
import { AnimalCategoriesService } from './../../../../services/animal-categories.service';

@Component({
  selector: 'app-animal-categories-section',
  templateUrl: './animal-categories-section.component.html',
  styleUrls: ['./animal-categories-section.component.scss'],
})
export class AnimalCategoriesSectionComponent implements OnInit, OnDestroy {
  private categoriesSub: Subscription;
  private dialogRefSub: Subscription;
  isLoading = false;
  categories: AnimalCategory[];
  error: string = null;
  isAdmin = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private animalCategoriesService: AnimalCategoriesService,
    private adminAnimalCategoriesService: AdminAnimalCategoriesService,
    private dialog: MatDialog,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.isAdmin = this.authService.getUser().roles.includes(UserRoles.SUPERADMIN);
    this.categoriesSub = this.activatedRoute.queryParams
      .pipe(
        tap(() => (this.isLoading = true)),
        switchMap((params) =>
          this.animalCategoriesService.fetchCategories(params.page)
        )
      )
      .subscribe(
        (res: AnimalCategory[]) => {
          this.isLoading = false;
          this.categories = res;
        },
        (err) => {
          this.error = err.message;
          this.isLoading = false;
        }
      );
  }

  ngOnDestroy(): void {
    if (this.categoriesSub) {
      this.categoriesSub.unsubscribe();
    }
  }

  openDeleteDialog(id: number, name: string) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { id, name, obs$: this.adminAnimalCategoriesService.delete(id) },
    });

    this.dialogRefSub = dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.categories = this.categories.filter((a) => a.id !== id);
      }
    });
  }
}
