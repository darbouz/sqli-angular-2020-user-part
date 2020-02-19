interface Role {
  name: string;
  permissions: string[];
}

export interface User {
  firstName: string;
  lastName: string;
  age?: number;
  role?: Role;
}
