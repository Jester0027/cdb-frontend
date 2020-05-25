export enum UserRoles {
  SUPERADMIN = 'ROLE_SUPERADMIN',
  MANAGER = 'ROLE_MANAGER',
  USER = 'ROLE_USER',
}

export interface User {
  id?: string;
  username: string;
  roles?: UserRoles[];
  password?: string;
}
