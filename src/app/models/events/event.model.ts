import { EventTheme } from './event-theme.model';

export interface Event {
  id: number;
  title: string;
  eventDate: Date;
  address: string;
  city: string;
  zipCode: number;
  coordinates: string;
  imageUrl: string;
  description: string;
  eventTheme: EventTheme;
}
