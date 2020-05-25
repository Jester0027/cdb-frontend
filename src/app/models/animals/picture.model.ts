import { Animal } from './animal.model';

export interface Picture {
  id?: string;
  picture: string;
  animal?: Animal;
}
