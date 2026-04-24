import { config } from '@keystone-6/core';
import { statelessSessions } from '@keystone-6/core/session';
import { createAuth } from '@keystone-6/auth';
import 'dotenv/config';

import { User } from './schemas/User';
// később:
// import { Apartment } from './schemas/Apartment';
// import { Issue } from './schemas/Issue';

const sessionSecret = process.env.COOKIE_SECRET || 'super-secret';

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
  },
});

export default withAuth(
  config({
    db: {
      provider: 'postgresql',
      url: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/housing',
    },

    lists: {
      User,
      // Apartment,
      // Issue,
    },

    session: statelessSessions({
      secret: sessionSecret,
    }),

    server: {
      cors: {
        origin: ['http://localhost:7777'],
        credentials: true,
      },
    },

    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
  })
);