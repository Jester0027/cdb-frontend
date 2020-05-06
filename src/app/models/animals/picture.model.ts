import { Animal } from './animal.model';

export interface Picture {
  id?: number;
  picture: string;
  animal?: Animal;
}
