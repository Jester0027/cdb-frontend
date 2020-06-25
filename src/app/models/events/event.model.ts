import { EventTheme } from './event-theme.model';

export interface Event {
  id?: string;
  title: string;
  slug?: string;
  event_date: Date;
  address: string;
  city: string;
  zip_code: number;
  coordinates: string;
  price: number;
  image_url: string;
  description: string;
  event_theme: EventTheme;
}
