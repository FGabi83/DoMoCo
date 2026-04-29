import { list } from '@keystone-6/core';
import { text, password, relationship } from '@keystone-6/core/fields';

export const User = list({
  access: {
    operation: {
      query: () => true, // read
      create: () => true,
      update: () => true,
      delete: () => true,
    },
  },
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
    password: password(),
    role: relationship({
      ref: 'Role.assignedTo',
      access: {
        create: () => true,
        update: () => true,
      },
    }),
  },

});