export interface User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  ssn: string;
  dob: Date;
  hiredOn: Date;
  terminatedOn: Date;
  email: string;
  department: string;
  gender: string;
  portrait: string;
  thumbnail: string;
  addresses: UserAddress[];
  phones: UserPhone[];
  roles: UserRole[];
  projects: ProjectAssignment[];
}

export interface UserAddress {
  id: number;
  user: User;
  userId: number;
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface UserPhone {
  id: number;
  user: User;
  userId: number;
  type: string;
  number: string;
}

export interface UserRole {
  id: number;
  user: User;
  userId: number;
  role: string;
}

export interface ProjectAssignment {
  id: number;
  project: Project;
  projectId: number;
  user: User;
  userId: number;
}

export interface Project {
  id: number;
  name: string;
  department: string;
  startedOn: Date;
  endedOn: Date;
  description: string;
  assignments: ProjectAssignment[];
}
