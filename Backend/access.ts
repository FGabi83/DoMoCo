import { permissionsList } from './schemas/fields';
import type { ListAccessArgs, Permission } from './types';

export function isSignedIn({ session }: ListAccessArgs) {
  return !!session;
}

// Dinamikus permission generálás
type PermissionFn = (args: { session?: any }) => boolean;

const generatedPermissions: Record<Permission, PermissionFn> = Object.fromEntries(
  permissionsList.map((permission) => [
    permission,
    ({ session }: { session?: any }) => {
      return !!session?.data?.role?.[permission];
    },
  ])
) as Record<Permission, PermissionFn>;

// Egyszerű boolean permission checkek
export const permissions = {
  ...generatedPermissions,
};

// Rule alapú access control (szűrőt is visszaadhat!)
export const rules = {
  canManageRoles({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) return false;
    if (permissions.canManageRoles({ session })) return true;

    return false;
  },

  canManageUsers({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) return false;

    if (permissions.canManageUsers({ session })) return true;

    return false;
  },
};