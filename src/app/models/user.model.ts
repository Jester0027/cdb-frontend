export enum UserRoles {
  SUPERADMIN = 'ROLE_SUPERADMIN',
  MANAGER = 'ROLE_MANAGER',
  USER = 'ROLE_USER',
}

export interface User {
  id?: number;
  username: string;
  roles?: UserRoles[];
  password?: string;
}
