import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  inputs : ['user'],
  outputs: ['updateUserEvent','deleteUserEvent']
})
export class UserDetailComponent implements OnInit {
  user: any;
  private updateUserEvent = new EventEmitter();
  private deleteUserEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  updateUser() {
    this.updateUserEvent.emit(this.user);
  }

  deleteUser() {
    this.deleteUserEvent.emit(this.user);
  }
}
