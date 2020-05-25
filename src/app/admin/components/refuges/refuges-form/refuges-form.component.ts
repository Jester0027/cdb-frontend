import { AdminRefugesService } from './../../../services/admin-refuges.service';
import { Refuge } from './../../../../models/animals/refuge.model';
import { RefugesService } from './../../../../services/refuges.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { GeoCodingService } from './../../../services/geo-coding.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, Subscription } from 'rxjs';

@Component({
  selector: 'app-refuges-form',
  templateUrl: './refuges-form.component.html',
  styleUrls: ['./refuges-form.component.scss'],
})
export class RefugesFormComponent implements OnInit, OnDestroy {
  private adminRefugeSub: Subscription;
  private dataSub: Subscription;
  form: FormGroup;
  coords: { latitude: number; longitude: number } = {
    latitude: 50.677761145687576,
    longitude: 4.372614825650936,
  };
  coordsError: string = null;
  error: string = null;
  editMode = false;
  isLoading = false;
  refugeId: string = null;

  constructor(
    private fb: FormBuilder,
    private geoCodingService: GeoCodingService,
    private activatedRoute: ActivatedRoute,
    private refugesService: RefugesService,
    private adminRefugesService: AdminRefugesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(255),
        ],
      ],
      address: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(255),
        ],
      ],
      city: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(255),
        ],
      ],
      zip_code: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(255),
        ],
      ],
      coordinates: [''],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(2550),
        ],
      ],
    });

    this.dataSub = this.activatedRoute.params
      .pipe(
        switchMap((params) => {
          this.isLoading = true;
          if (params.id) {
            this.editMode = true;
            this.refugeId = params.id;
            return this.refugesService.fetchOneRefuge(params.id);
          }
          return of(null);
        })
      )
      .subscribe(
        (res) => {
          this.isLoading = false;
          this.error = null;
          if (res) {
            const refuge: Refuge = res;
            this.form.get('name').setValue(refuge.name);
            this.form.get('address').setValue(refuge.address);
            this.form.get('city').setValue(refuge.city);
            this.form.get('zip_code').setValue(refuge.zip_code);
            this.form.get('coordinates').setValue(refuge.coordinates);
            this.form.get('description').setValue(refuge.description);
          }
        },
        (err) => {
          this.error = err.message;
          this.isLoading = false;
        }
      );
  }

  ngOnDestroy(): void {
    if (this.dataSub) {
      this.dataSub.unsubscribe();
    }
    if (this.adminRefugeSub) {
      this.adminRefugeSub.unsubscribe();
    }
  }

  calculateCoords() {
    this.geoCodingService
      .getCoordinates(
        `${this.form.get('address').value}-${this.form.get('city').value}-${
          this.form.get('zip_code').value
        }`
      )
      .subscribe(
        (res) => {
          this.coordsError = null;
          this.coords = {
            latitude: +res.latitude,
            longitude: +res.longitude,
          };
        },
        (err) => {
          this.coordsError = "L'adresse n'a pas pu etre trouvée";
        }
      );
  }

  mapClick(e) {
    this.coords = {
      latitude: e.coords.lat,
      longitude: e.coords.lng,
    };
  }

  onSubmit() {
    this.isLoading = true;
    const refuge: Refuge = this.form.value;
    refuge.coordinates = `${this.coords.latitude},${this.coords.longitude}`;
    console.log(refuge);
    if (this.editMode) {
      this.adminRefugeSub = this.adminRefugesService
        .update(this.refugeId, refuge)
        .subscribe(
          () => {
            this.isLoading = false;
            this.router.navigate(['/admin', 'refuges']);
          },
          (err) => {
            this.isLoading = false;
            this.error = err.message;
          }
        );
    } else {
      this.adminRefugeSub = this.adminRefugesService.add(refuge).subscribe(
        () => {
          this.isLoading = false;
          this.router.navigate(['/admin', 'refuges']);
        },
        (err) => {
          this.isLoading = false;
          this.error = err.message;
        }
      );
    }
  }
}
