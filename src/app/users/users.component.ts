import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { User, usertypeToLabelMapping, userTypes } from '../Interfaces/user';
import {
  faTrash,
  faEdit,
  faTimes,
  faSave,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  loading: boolean = false;
  users: Array<User> = [];
  faTrash = faTrash;
  faEdit = faEdit;
  faTimes = faTimes;
  faSave = faSave;
  formValues: Array<User> = [];
  mandatoryFields: Array<string> = ['firstName', 'email', 'role'];
  public usertypeToLabelMapping = usertypeToLabelMapping;
  public userTypes = Object.values(userTypes);
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
  loadData(
    loadDisabled: boolean = false,
    singleUser: boolean = false,
    index: number = 0
  ): void {
    if (loadDisabled && singleUser) {
      let data = this.userService.getUsers();
      console.log([...data]);

      let copyUsers = [...this.users];
      copyUsers[index] = data[index];
      this.users = copyUsers;
      return;
    }
    this.loading = true;
    setTimeout(() => {
      let data = this.userService.getUsers();
      this.users = [...data];
      this.formValues = [...data];
      console.log(this.users);
      this.loading = false;
    }, 500);
  }
  toggleEdit(index: number) {
    this.users[index].isEdit = !this.users[index].isEdit;
    if (!this.users[index].isEdit) {
      this.loadData(true, true, index);
    }
  }
  removeUser(index: number) {
    this.users.splice(index, 1);
  }
}
