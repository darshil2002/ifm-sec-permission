export interface DataType {
  success: string;
  message: string;
  role: Role[];
}

export interface Role {
  isCloneRole: null;
  roleDescription: string;
  roleId: string;
  roleName: string;
  roleToClone: null;
}
