export interface Meta {
  limit: number;
  currentItems: number;
  totalItems: number;
  currentPage: number;
  maxPages: number;
  offset: number;
}

export interface PaginatedData<T> {
  data: T[];
  meta: Meta;
}
