import { AdminAnimalsService } from '../../../services/admin-animals.service';
import { PaginatedData } from '../../../../models/paginated-data.model';
import { Refuge } from '../../../../models/animals/refuge.model';
import { AnimalCategory } from '../../../../models/animals/animal-category.model';
import { AnimalCategoriesService } from '../../../../services/animal-categories.service';
import { RefugesService } from '../../../../services/refuges.service';
import { AnimalsService } from '../../../../services/animals.service';
import { switchMap } from 'rxjs/operators';
import { Animal } from '../../../../models/animals/animal.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, Subscription } from 'rxjs';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss'],
})
export class AnimalFormComponent implements OnInit, OnDestroy {
  private animalsSub: Subscription;
  private adminAnimalsSub: Subscription;
  animalCategories: AnimalCategory[];
  refuges: Refuge[];
  form: FormGroup;
  editedAnimal: Animal = null;
  isLoading = false;
  editMode = false;
  error: string = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private animalsService: AnimalsService,
    private refugesService: RefugesService,
    private animalCategoriesService: AnimalCategoriesService,
    private fb: FormBuilder,
    private adminAnimalsService: AdminAnimalsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.form = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(255),
        ],
      ],
      race: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(255),
        ],
      ],
      height: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      age: ['', [Validators.required]],
      ageUnit: ['y', [Validators.required]],
      gender: [null, [Validators.required]],
      attitude: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(2550),
        ],
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(2550),
        ],
      ],
      animal_category: this.fb.group({
        slug: ['', [Validators.required]],
      }),
      refuge: this.fb.group({
        slug: ['', [Validators.required]],
      }),
    });

    const animalObs$ = this.animalCategoriesService.fetchCategories().pipe(
      switchMap((categories: AnimalCategory[]) => {
        this.animalCategories = categories;
        return this.refugesService.fetchRefuges();
      }),
      switchMap((refuges: PaginatedData<Refuge>) => {
        this.refuges = refuges.data;
        return this.activatedRoute.params;
      }),
      switchMap((params) => {
        if (params.id) {
          this.editMode = true;
          return this.animalsService.fetchOneAnimal(params.id);
        }
        return of(null);
      })
    );
    this.animalsSub = animalObs$.subscribe((res: Animal | null) => {
      this.isLoading = false;
      if (res) {
        const animal = res;
        this.editedAnimal = animal;
        this.editMode = true;
        this.form.get('name').setValue(animal.name);
        this.form.get('race').setValue(animal.race);
        this.form.get('height').setValue(animal.height);
        this.form.get('weight').setValue(animal.weight);
        this.form.get('age').setValue(animal.age.split(' ')[0]);
        this.form.get('ageUnit').setValue(animal.age.split(' ')[1]);
        this.form.get('gender').setValue(animal.gender.toString());
        this.form.get('attitude').setValue(animal.attitude);
        this.form.get('description').setValue(animal.description);
        this.form
          .get('animal_category.slug')
          .setValue(animal.animal_category.slug);
        this.form.get('refuge.slug').setValue(animal.refuge.slug);
      }
    });
  }

  ngOnDestroy(): void {
    this.unsub(this.animalsSub);
    this.unsub(this.adminAnimalsSub);
  }

  private unsub(sub: Subscription): void {
    if (sub) {
      sub.unsubscribe();
    }
  }

  onSubmit() {
    this.isLoading = true;
    const data = {
      ...this.form.value,
      age: `${ this.form.get('age').value } ${ this.form.get('ageUnit').value }`,
      gender: this.form.get('gender').value === 'true',
    };
    delete data.ageUnit;

    if (this.editMode) {
      this.adminAnimalsSub = this.adminAnimalsService
        .update(this.editedAnimal.id, data)
        .subscribe(
          () => {
            this.isLoading = false;
            this.router.navigate(['/admin', 'animaux']);
          },
          (err) => {
            this.isLoading = false;
            console.log(err);
            this.error = err.message;
          }
        );
    } else {
      this.adminAnimalsSub = this.adminAnimalsService.add(data).subscribe(
        () => {
          this.isLoading = false;
          this.router.navigate(['/admin', 'animaux']);
        },
        (err) => {
          this.isLoading = false;
          console.log(err);
          this.error = err.message;
        }
      );
    }
  }

  invalid(input: string): boolean {
    return (
      this.form.get(input).status === 'INVALID' && this.form.get(input).touched
    );
  }
}
