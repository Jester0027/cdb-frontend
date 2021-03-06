import { Subscription } from 'rxjs';
import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { environment } from './../../../../../environments/environment';
import { Animal } from './../../../../models/animals/animal.model';
import { AnimalsService } from './../../../../services/animals.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss'],
})
export class AnimalDetailComponent implements OnInit, OnDestroy {
  @Output() loaded = new EventEmitter();
  private animalSub: Subscription;
  animal: Animal;
  error: string = null;
  isLoading = false;
  imageUrl: string;
  imageDescription: string;

  constructor(
    private animalsService: AnimalsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.animalSub = this.activatedRoute.params
      .pipe(
        switchMap((params) => {
          return this.animalsService.fetchOneAnimalFromSlug(params.slug);
        })
      )
      .subscribe(
        (animal: Animal) => {
          this.isLoading = false;
          this.animal = animal;
          this.loaded.emit(animal);
          this.imageDescription = `Photo de ${this.animal.name}`;
        },
        (err) => {
          this.isLoading = false;
          this.error = err.message;
          this.router.navigate(['/not-found']);
        }
      );
  }

  getSrc(name: string) {
    if (!name) {
      return '../../../../../assets/images/default-photo.png';
    }

    if (name.startsWith('http') || name.startsWith('https')) {
      return name;
    }

    return `${environment.api.replace(
      '/index.php',
      ''
    )}/images/animal_pictures/${name}`;
  }

  ngOnDestroy(): void {
    if (this.animalSub) {
      this.animalSub.unsubscribe();
    }
  }

  clearError() {
    this.error = null;
  }
}
