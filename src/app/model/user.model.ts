import { ResourceModel } from './resource.model';

export class UserModel extends ResourceModel<UserModel> {
  public firstName!: string;
  public middleName!: string;
  public lastName!: string;
  public email!: string;
  public address!: string;
  public phoneNumber!: string;
  public role!: string;
  public isEdit: boolean = false;

  constructor(model?: Partial<UserModel>) {
    super(model);
  }
}
