import { AdminEventService } from './../../../services/admin-event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, Subscription } from 'rxjs';

import { GeoCodingService } from './../../../services/geo-coding.service';
import { EventsService } from './../../../../services/events.service';
import { Event } from './../../../../models/events/event.model';
import { EventTheme } from './../../../../models/events/event-theme.model';
import { switchMap } from 'rxjs/operators';
import { EventThemesService } from './../../../../services/event-themes.service';
import { DateAdapter } from '@angular/material/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
})
export class EventFormComponent implements OnInit, OnDestroy {
  private formSub: Subscription;
  private submitSub: Subscription;
  form: FormGroup;
  themes: EventTheme[];
  event: Event;
  eventId: number;
  editMode = false;
  isLoading = false;
  dateError: string = null;
  coordsError: string = null;
  errorMessage: string = null;
  coords: { latitude: number; longitude: number } = {
    latitude: 50.677761145687576,
    longitude: 4.372614825650936,
  };

  constructor(
    private fb: FormBuilder,
    private eventThemesService: EventThemesService,
    private eventsService: EventsService,
    private adminEventService: AdminEventService,
    private activatedRoute: ActivatedRoute,
    private geoCodingService: GeoCodingService,
    private router: Router,
    private datePipe: DatePipe,
    private adapter: DateAdapter<any>
  ) {}

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

  ngOnInit(): void {
    this.isLoading = true;
    this.adapter.setLocale('fr');
    this.form = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(255),
        ],
      ],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
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
      event_theme: this.fb.group({
        slug: ['', [Validators.required]],
      }),
    });

    this.formSub = this.eventThemesService
      .fetchEventThemes()
      .pipe(
        switchMap((eventThemes: EventTheme[]) => {
          this.themes = eventThemes;
          return this.activatedRoute.params;
        }),
        switchMap((params) => {
          if (params.id) {
            this.editMode = true;
            this.eventId = +params.id;
            return this.eventsService.fetchOneEvent(params.id);
          }
          return of(null);
        })
      )
      .subscribe((res: Event | null) => {
        this.isLoading = false;
        if (res) {
          const event = res;
          this.event = res;
          this.coords = {
            latitude: +res.coordinates.split(',')[0],
            longitude: +res.coordinates.split(',')[1],
          };
          const dateTime = new Date(event.event_date);
          this.form.get('title').setValue(event.title);
          this.form.get('date').setValue(event.event_date);
          this.form
            .get('time')
            .setValue(dateTime.getHours() + ':' + dateTime.getMinutes());
          this.form.get('address').setValue(event.address);
          this.form.get('city').setValue(event.city);
          this.form.get('zip_code').setValue(event.zip_code);
          this.form.get('coordinates').setValue(event.coordinates);
          this.form.get('description').setValue(event.description);
          this.form.get('event_theme.slug').setValue(event.event_theme.slug);
        }
      });
  }

  ngOnDestroy(): void {
    if (this.formSub) {
      this.formSub.unsubscribe();
    }
    if (this.submitSub) {
      this.submitSub.unsubscribe();
    }
  }

  mapClick(e) {
    this.coords = {
      latitude: e.coords.lat,
      longitude: e.coords.lng,
    };
  }

  onSubmit() {
    const data = this.form.value;
    delete data.date;
    delete data.time;
    const date = new Date(this.form.get('date').value);
    const [h, m] = this.form.get('time').value.split(':');
    date.setHours(+h, +m);
    data.event_date = this.datePipe.transform(date, 'yyyy-MM-ddTHH:mm:ssZZZZZ');
    data.coordinates = `${this.coords.latitude},${this.coords.longitude}`;
    if (this.editMode) {
      this.submitSub = this.adminEventService
        .update(this.eventId, data)
        .subscribe(
          (res) => {
            console.log(res);
            this.router.navigate(['/admin', 'evenements']);
          },
          (err) => {
            console.log(err);
            this.errorMessage = err.message;
          }
        );
    } else {
      this.submitSub = this.adminEventService.add(data).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['/admin', 'evenements']);
        },
        (err) => {
          console.log(err);
          this.errorMessage = err.message;
        }
      );
    }
  }
}
