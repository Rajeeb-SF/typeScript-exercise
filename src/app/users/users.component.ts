import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { User, usertypeToLabelMapping, userTypes } from '../Interfaces/user';
import {
  faTrash,
  faEdit,
  faTimes,
  faSave,
} from '@fortawesome/free-solid-svg-icons';
import { UserGenericService } from '../generic-user-crud/user-generic.service';
import { DateFormatter } from '../decorators/date-time-formatter';
import { UserModel } from '../model/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
// @DateFormatter('12/05/1998')
export class UsersComponent implements OnInit {
  loading: boolean = false;
  users: Array<UserModel> = [];
  faTrash = faTrash;
  faEdit = faEdit;
  faTimes = faTimes;
  faSave = faSave;
  mandatoryFields: Array<string> = ['firstName', 'email', 'role'];
  public usertypeToLabelMapping = usertypeToLabelMapping;
  public userTypes = Object.values(userTypes);
  formModalTitle: string = 'Create new user';
  userForm!: FormGroup;
  submitted: boolean = false;
  constructor(
    private userService: UserService,
    private userCrudService: UserGenericService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      address: [''],
      phoneNumber: [''],
    });
  }
  get f() {
    return this.userForm.controls;
  }
  loadData(): void {
    this.loading = true;
    this.userCrudService.get().subscribe((data) => {
      if (!data.length) {
        $('#informModal').modal('show');
      }
      for (const item of data) {
        item.isEdit = false;
      }
      this.users = [...data];
      this.loading = false;
      console.log(this.users);
    });
  }
  toggleEdit(index: number) {
    this.users[index].isEdit = !this.users[index].isEdit;
    if (!this.users[index].isEdit) {
      this.loadData();
    }
  }
  removeUser(index: number) {
    this.userCrudService.delete(this.users[index].id).subscribe((data) => {
      this.loadData();
    });
  }
  updateUser(index: number) {
    //check mandatory fiels
    for (const field of this.mandatoryFields) {
      let editedUser: any = this.users[index];
      if (!editedUser[field]) {
        alert(`${field} is mandatory field`);
        return;
      }
    }
    this.userCrudService.update(this.users[index]).subscribe((data) => {
      this.loadData();
    });
  }
  onSubmit(): void {
    this.submitted = true;
    console.log(this.userForm.value);
    this.userCrudService.create(this.userForm.value).subscribe((data) => {
      $('#formModal').modal('hide');
    });
  }
  onCancel(): void {
    this.userForm.reset();
    this.submitted = false;
  }
}
