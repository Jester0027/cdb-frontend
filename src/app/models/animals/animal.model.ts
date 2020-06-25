import { Picture } from './picture.model';
import { Refuge } from './refuge.model';
import { AnimalCategory } from './animal-category.model';

export interface Animal {
  id?: string;
  name: string;
  slug?: string;
  race: string;
  /**
   * height in cm
   */
  height: number;
  /**
   * weight in kg
   */
  weight: number;
  age: string;
  /**
   * true if male, false if female
   */
  gender: boolean;
  price: number;
  attitude?: string;
  description?: string;
  is_adopted?: boolean;
  animal_category?: AnimalCategory;
  refuge?: Refuge;
  pictures?: Picture[];
}
