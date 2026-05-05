import type { Permission } from './schemas/fields';

export type { Permission };

// Session típus (Keystone 6 kompatibilis)
export type Session = {
  itemId: string;
  listKey: string;
  data: {
    id: string;
    name: string;
    role?: {
      id: string;
      name: string;
    } & {
      [key in Permission]: boolean;
    };
  };
};

// Access függvény argumentumok
export type ListAccessArgs = {
  session?: Session;
  itemId?: string;
};

// Általános access típus
export type AccessArgs = ListAccessArgs;

export type AccessControl = {
  [key: string]: (args: AccessArgs) => boolean | Record<string, any>;
};