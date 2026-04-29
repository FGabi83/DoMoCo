import { checkbox } from "@keystone-6/core/fields";

export const permissionFields = {
  // USER
  canManageUsers: checkbox({
    defaultValue: false,
    label: "Can manage users",
  }),

  // ROLE
  canManageRoles: checkbox({
    defaultValue: false,
    label: "Can manage roles",
  }),

  // BUILDING / APARTMENT
  canViewBuilding: checkbox({
    defaultValue: false,
    label: "Can view buildings",
  }),
  canManageBuildings: checkbox({
    defaultValue: false,
    label: "Can manage buildings",
  }),

  canViewApartment: checkbox({
    defaultValue: false,
    label: "Can view apartments",
  }),
  canManageApartments: checkbox({
    defaultValue: false,
    label: "Can manage apartments",
  }),

  // ISSUE
  canCreateIssue: checkbox({
    defaultValue: false,
    label: "Can create issues",
  }),
  canEditOwnIssue: checkbox({
    defaultValue: false,
    label: "Can edit own issues",
  }),
  canDeleteOwnIssue: checkbox({
    defaultValue: false,
    label: "Can delete own issues",
  }),
  canEditAnyIssue: checkbox({
    defaultValue: false,
    label: "Can edit any issue",
  }),
  canViewIssue: checkbox({
    defaultValue: false,
    label: "Can view issues",
  }),

  // DECISION
  canCreateDecision: checkbox({
    defaultValue: false,
    label: "Can create decisions",
  }),
  canVote: checkbox({
    defaultValue: false,
    label: "Can vote on decisions",
  }),
  canViewDecision: checkbox({
    defaultValue: false,
    label: "Can view decisions",
  }),

  // PAYMENT OBLIGATION
  canViewOwnPaymentObligation: checkbox({
    defaultValue: false,
    label: "Can view own payment obligations",
  }),
  canManagePaymentObligation: checkbox({
    defaultValue: false,
    label: "Can manage payment obligations",
  }),

  // PAYMENT
  canViewOwnPayment: checkbox({
    defaultValue: false,
    label: "Can view own payments",
  }),
  canViewAnyPayment: checkbox({
    defaultValue: false,
    label: "Can view all payments",
  }),
  canManagePayment: checkbox({
    defaultValue: false,
    label: "Can manage payments",
  }),
};

export type Permission = keyof typeof permissionFields;

export const permissionsList: Permission[] = Object.keys(
  permissionFields
) as Permission[];