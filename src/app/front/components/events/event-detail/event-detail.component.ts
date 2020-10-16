import { Component, EventEmitter, Inject, OnDestroy, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { EventsService } from '../../../../services/events.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../../../models/events/event.model';
import { switchMap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { RecaptchaComponent } from 'ng-recaptcha';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit, OnDestroy {
  @Output() public loaded = new EventEmitter();
  private eventsSub: Subscription;
  public event: Event;
  public error: string = null;
  public isLoading = false;
  public imageDescription: string;
  public coords: { lat: number, lng: number } = null;

  public constructor(
    private route: ActivatedRoute,
    private eventsService: EventsService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId
  ) {
  }

  public ngOnInit(): void {
    RecaptchaComponent.prototype.ngOnDestroy = function() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    };
    this.isLoading = true;
    this.fetchEvent();
  }

  public ngOnDestroy(): void {
    if (this.eventsSub) {
      this.eventsSub.unsubscribe();
    }
  }

  public get isBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  public get image() {
    const name = this.event.image_url;
    if (!name) {
      return '../../../../../assets/images/favicon.png';
    }

    if (name.startsWith('http') || name.startsWith('https')) {
      return name;
    }

    return `${ environment.api.replace(
      '/index.php',
      ''
    ) }/images/animal_pictures/${ name }`;
  }

  private fetchEvent() {
    this.eventsSub = this.route.params
      .pipe(switchMap(params => {
        return this.eventsService.fetchOneEventFromSlug(params.slug);
      })).subscribe((event: Event) => {
        this.event = event;
        this.loaded.emit(event);
        this.coords = {
          lat: +event.coordinates.split(',')[0],
          lng: +event.coordinates.split(',')[1],
        };
        this.imageDescription = `Photo de l\'évènement ${ event.title }`;
        this.isLoading = false;
      }, (err) => {
        this.error = err.message;
        this.isLoading = false;
      });
  }

}
