import { ResourceModel } from './resource.model';

export class UserModel extends ResourceModel<UserModel> {
  public firstName!: string;
  public middleName!: string;
  public lastName!: string;

  constructor(model?: Partial<UserModel>) {
    super(model);
  }
}
