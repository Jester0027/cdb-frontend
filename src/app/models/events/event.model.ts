import { EventTheme } from './event-theme.model';

export interface Event {
  id?: number;
  title: string;
  event_date: Date;
  address: string;
  city: string;
  zip_code: number;
  coordinates: string;
  image_url: string;
  description: string;
  event_theme: EventTheme;
}
