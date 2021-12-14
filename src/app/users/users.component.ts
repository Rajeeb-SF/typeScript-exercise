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
  loadData(): void {
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
      this.loadData();
    }
  }
  removeUser(index: number) {
    this.users.splice(index, 1);
  }
  saveUser(index: number) {
    //check mandatory fiels
    for (const field of this.mandatoryFields) {
      let editedUser: any = this.users[index];
      console.log(editedUser);

      if (!editedUser[field]) {
        alert(`${field} is mandatory field`);
        return;
      }
    }
    this.users[index].isEdit = false;
  }
}
