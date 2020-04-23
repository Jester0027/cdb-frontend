import { tap, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Meta, PaginatedData } from './../../../../models/paginated-data.model';
import { Event } from './../../../../models/events/event.model';
import { EventsService } from './../../../../services/events.service';

@Component({
  selector: 'app-events-section',
  templateUrl: './events-section.component.html',
  styleUrls: ['./events-section.component.scss'],
})
export class EventsSectionComponent implements OnInit, OnDestroy {
  private eventsSub: Subscription;
  events: Event[];
  meta: Meta;
  isLoading = false;
  error: string = null;

  constructor(
    private eventsService: EventsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.eventsSub = this.activatedRoute.queryParams
      .pipe(
        tap(() => (this.isLoading = true)),
        switchMap((params) => this.eventsService.fetchEvents(params.page))
      )
      .subscribe(
        (res: PaginatedData<Event>) => {
          this.isLoading = false;
          this.events = res.data;
          this.meta = res.meta;
        },
        (err: Error) => {
          this.isLoading = false;
          this.error = err.message;
          this.router.navigate(['/not-found']);
        }
      );
  }

  setLoader() {
    this.isLoading = true;
  }

  ngOnDestroy(): void {
    this.eventsSub.unsubscribe();
  }
}
