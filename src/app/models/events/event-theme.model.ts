import { PaginatedData } from './../paginated-data.model';
import { Event } from './event.model';

export interface EventTheme {
  id?: string;
  name?: string;
  slug: string;
  description?: string;
  event?: Event[];
  paginated_events?: PaginatedData<Event>;
}
