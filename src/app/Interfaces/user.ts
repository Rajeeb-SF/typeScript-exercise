export interface User {
  firstName: String;
  middleName: String;
  lastName: String;
  email: String;
  role: String;
  phoneNumber: String;
  address: String;
  createdAt: String;
  updatedAt: String;
  isEdit: boolean;
}
export enum userTypes {
  superAdmin = 'superAdmin',
  admin = 'admin',
  subscriber = 'subscriber',
}
export const usertypeToLabelMapping: Record<userTypes, string> = {
  [userTypes.superAdmin]: 'Super Admin',
  [userTypes.admin]: 'Admin',
  [userTypes.subscriber]: 'Subscriber',
};
