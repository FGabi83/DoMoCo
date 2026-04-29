import { list } from "@keystone-6/core";
import { text, relationship } from "@keystone-6/core/fields";
import { permissionFields } from "./fields";

export const Role = list({
  access: {
    operation: {
      query: () => true, // read
      create: () => true,
      update: () => true,
      delete: () => true,
    },
  },
  fields: {
    name: text({ validation: { isRequired: true }, isIndexed: "unique" }),
    ...permissionFields,
    assignedTo: relationship({
      ref: "User.role",
      many: true,
      ui: {
        itemView: { fieldMode: "read" },
      }
    }),
  },
});