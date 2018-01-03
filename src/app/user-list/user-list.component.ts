import {User } from '../user';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  inputs: ['users'],
  outputs: ['SelectUser']
})
export class UserListComponent implements OnInit {

  public SelectUser = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect(use: User){
    this.SelectUser.emit(use);
  }
}
