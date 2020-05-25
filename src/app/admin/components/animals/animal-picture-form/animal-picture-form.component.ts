import { switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { environment } from './../../../../../environments/environment';
import { Picture } from './../../../../models/animals/picture.model';
import { Animal } from './../../../../models/animals/animal.model';
import { AnimalsService } from './../../../../services/animals.service';
import { AdminAnimalsService } from './../../../services/admin-animals.service';

@Component({
  selector: 'app-animal-picture-form',
  templateUrl: './animal-picture-form.component.html',
  styleUrls: ['./animal-picture-form.component.scss'],
})
export class AnimalPictureFormComponent implements OnInit, OnDestroy {
  private animalsSub: Subscription;
  files: File[] = [];
  animalId: string;
  pictures: Picture[] = [];
  isLoading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private adminAnimalsService: AdminAnimalsService,
    private animalsService: AnimalsService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.animalsSub = this.activatedRoute.params
      .pipe(
        tap((params) => (this.animalId = params.id)),
        switchMap((params) => this.animalsService.fetchOneAnimal(params.id))
      )
      .subscribe((animal: Animal) => {
        this.isLoading = false;
        this.pictures = animal.pictures;
      });
  }

  onSelect(event) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  getSrc(name: string) {
    if (name.startsWith('http') || name.startsWith('https')) {
      return name;
    }
    return `${environment.api.replace(
      '/index.php',
      ''
    )}/images/animal_pictures/${name}`;
  }

  deletePicture(id: string) {
    return this.adminAnimalsService.deletePicture(id).subscribe(() => {
      this.pictures = this.pictures.filter((f) => f.id !== id);
    });
  }

  onSubmit() {
    this.animalsSub = this.adminAnimalsService
      .addPictures(this.animalId, this.files)
      .pipe(
        tap(() => {
          this.files = [];
        }),
        switchMap(() => {
          return this.animalsService.fetchOneAnimal(this.animalId);
        })
      )
      .subscribe((animal: Animal) => {
        this.pictures = animal.pictures;
      });
  }

  ngOnDestroy(): void {
    if (this.animalsSub) {
      this.animalsSub.unsubscribe();
    }
  }
}
