import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface Contact{
  firstName : string;
  lastName : string;
  gender : 'Male' | 'Female';
  phone? : string;
  email? : string;
  address? : string;
  website? : string;
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts : MatTableDataSource<Contact> = new MatTableDataSource<Contact>([
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', gender: 'Male', phone: '9991233210' },
    { firstName: 'Foo', lastName: 'Bar', email: 'foo.bar@excited.com', gender: 'Female', phone: '1112223334' },
    { firstName: 'Hello', lastName: 'World', email: 'hello.world@example.com', gender: 'Male', phone: '9999999999'},
    { firstName: 'Tom', lastName: 'Jerry', email: 'tom.jerry@example.com', gender: 'Female', phone: '8877456987' },
    { firstName: 'Jhon', lastName: 'Snow', email: 'jhon.snow@got.com', gender: 'Male', phone: '1111111111'},
    { firstName: 'Bob', lastName: 'Builder', email: 'bob.builder@cnn.com', gender: 'Male', phone: '9876543218' }
  ]);
  displayedColumns: string[] = ['firstName', 'lastName', 'phone', 'email'];
  constructor() { }

  ngOnInit(): void {
  }

}
