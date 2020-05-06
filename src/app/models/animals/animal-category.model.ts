import { Animal } from './animal.model';

export interface AnimalCategory {
  id?: number;
  name: string;
  slug: string;
  animals?: Animal[];
}
