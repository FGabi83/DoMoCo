import { list } from "@keystone-6/core";
import { text, relationship } from "@keystone-6/core/fields";
import { permissionFields } from "./fields";
import { rules } from "../access";

export const Role = list({
  access: {
    operation: {
      query: () => true, // read
      create: rules.canManageRoles,
      update: rules.canManageRoles,
      delete: rules.canManageRoles,
    },
  },
  fields: {
    name: text({
      validation: { isRequired: true },
      isIndexed: "unique",
      /*ui: {
        itemView: { fieldMode: "read" }, 
      },*/

    }),
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