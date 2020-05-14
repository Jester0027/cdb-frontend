import { PaginatedData } from './../paginated-data.model';
import { Animal } from './animal.model';

export interface AnimalCategory {
  id?: number;
  name: string;
  slug: string;
  animals?: Animal[];
  paginated_animals?: PaginatedData<Animal>;
}
