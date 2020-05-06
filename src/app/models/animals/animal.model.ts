import { Picture } from './picture.model';
import { Refuge } from './refuge.model';
import { AnimalCategory } from './animal-category.model';

export interface Animal {
  id?: number;
  name: string;
  race: string;
  /**
   * height in cm
   */
  height: number;
  /**
   * weight in kg
   */
  weight: number;
  age: number;
  /**
   * true if male, false if female
   */
  gender: boolean;
  price: number;
  attitude?: string;
  description?: string;
  animal_category?: AnimalCategory;
  refuge?: Refuge;
  pictures?: Picture[];
}
