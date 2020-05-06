import { Event } from './event.model';

export interface EventTheme {
  id?: number;
  name: string;
  slug: string;
  description?: string;
  event?: Event[];
}
