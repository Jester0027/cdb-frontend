import { Animal } from './animal.model';

export interface Refuge {
  id?: number;
  name: string;
  slug: string;
  address: string;
  city: string;
  zip_code: number;
  coordinates: string;
  description: string;
  animals?: Animal[];
}
