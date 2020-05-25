import { DeleteDialogComponent } from './../../delete-dialog/delete-dialog.component';
import { AdminEventService } from './../../../services/admin-event.service';
import { MatDialog } from '@angular/material/dialog';
import { switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Event } from './../../../../models/events/event.model';
import { PaginatedData, Meta } from './../../../../models/paginated-data.model';
import { EventsService } from './../../../../services/events.service';

@Component({
  selector: 'app-events-display',
  templateUrl: './events-display.component.html',
  styleUrls: ['./events-display.component.scss'],
})
export class EventsDisplayComponent implements OnInit, OnDestroy {
  private eventsSub: Subscription;
  private dialogRefSub: Subscription;
  isLoading = false;
  events: Event[];
  meta: Meta;
  error: string = null;

  constructor(
    private eventsService: EventsService,
    private adminEventService: AdminEventService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
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
        (err) => {
          this.error = err.message;
          this.isLoading = false;
        }
      );
  }

  ngOnDestroy(): void {
    if (this.eventsSub) {
      this.eventsSub.unsubscribe();
    }
    if (this.dialogRefSub) {
      this.dialogRefSub.unsubscribe();
    }
  }

  onPageChange(e) {
    console.log(e);
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { page: e.pageIndex + 1 },
      queryParamsHandling: 'merge',
    });
  }

  openDeleteDialog(id: string, name: string) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { id, name, obs$: this.adminEventService.delete(id) },
    });

    this.dialogRefSub = dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.events = this.events.filter((a) => a.id !== id);
      }
    });
  }
}
