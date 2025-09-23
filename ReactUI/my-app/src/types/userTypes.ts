export type ProfileUserDTO = {
  userId: number;
  userName: string;
  phone: string;
  email?: string;
  avatarUrl?: string;
  tenantId?: number;
  isActive: boolean;
  roleId: number;
  roleName: string;
};
