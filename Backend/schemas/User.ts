import { list } from '@keystone-6/core';
import { text, password, relationship } from '@keystone-6/core/fields';
import { permissions, rules } from '../access';

export const User = list({
  access: {
    operation: {
      query: () => true, // read
      create: ({ session }) =>
        !!session && rules.canManageUsers({ session }),

      update: ({ session }) =>
        !!session && rules.canManageUsers({ session }) || !!session?.itemId,

      delete: ({ session }) =>
        !!session && rules.canManageUsers({ session }),
    },
  },
  fields: {
    name: text({
      validation: { isRequired: true },

      access: {
        update: ({ session, item }) => {
          if (!session) return false;

          return (
            rules.canManageUsers({ session }) ||
            session.itemId === item.id
          );
        },
      },
    }),
    email: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
      access: {
        update: ({ session }) => {
          if (!session) return false;

          return rules.canManageUsers({ session });
        },
      },
    }),
    password: password(),
    role: relationship({
      ref: 'Role.assignedTo',
      access: {
        create: rules.canManageRoles,
        update: rules.canManageRoles,
      },
    }),
  },

});