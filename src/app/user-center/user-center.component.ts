import { DataService } from '../data.service';
import { User } from '../user';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-user-center',
  templateUrl: './user-center.component.html',
  styleUrls: ['./user-center.component.css'],
  providers: [DataService]
})
export class UserCenterComponent implements OnInit {

  users: Array<User>;

  selectedUser: User;
  model: User = new User;
  private hideNewUser = true;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getUsers()
    .subscribe(res => this.users = res);
  }

  onSelectUser(user: any) {
    this.selectedUser = user;
    this.hideNewUser = true;
    console.log(this.selectedUser);
  }

  onSubmitAddUser(user: User) {
    this._dataService.addUser(user)
      .subscribe(resNewUser => {
        this.users.push(resNewUser);
        this.hideNewUser = true;
        this.selectedUser = resNewUser;
      });
  }
  onUpdateUserEvent(user: any) {
    this._dataService.updateUser(user)
    .subscribe(resUpdatedUser => resUpdatedUser);
    this.selectedUser = null;
  }

  onDeleteUserEvent(user: any) {
    const userArray = this.users;
    this._dataService.deleteUser(user)
    .subscribe(resDeletedUser => {
      for (let i = 0; i < userArray.length; i++) {
        if (userArray[i]._id === user._id) {
          userArray.splice(i, 1);
        }
      }
    });
    this.selectedUser = null;
  }
  newUser() {
    this.hideNewUser = false;
  }
}
