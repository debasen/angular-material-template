import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  color = 'primary';

  chart1 = {
    data: [10.2, 32.45, 11.2, 23.7, 15.8, 42.5],
    labels: ['A', 'B', 'C', 'D', 'E', 'F']
  }

  chart2 = {
    data: [10.2, 32.45, 11.2, 23.7, 15.8, 42.5],
    labels: ['A', 'B', 'C', 'D', 'E', 'F']
  }

  chart3 = {
    data: [5.2, 32.45, 23.2, 30.7, 28.8, 20.4],
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  }

  user = { firstName: '', lastName: '', email: '', gender: '', phone: '' };
  users = new MatTableDataSource<any>([
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', gender: 'Male', phone: '9991233210' },
    { firstName: 'Foo', lastName: 'Bar', email: 'foo.bar@excited.com', gender: 'Female', phone: '1112223334' },
    { firstName: 'Hello', lastName: 'World', email: 'hello.world@example.com', gender: 'Male', phone: '9999999999'},
    { firstName: 'Tom', lastName: 'Jerry', email: 'tom.jerry@example.com', gender: 'Female', phone: '8877456987' },
    { firstName: 'Jhon', lastName: 'Snow', email: 'jhon.snow@got.com', gender: 'Male', phone: '1111111111'},
    { firstName: 'Bob', lastName: 'Builder', email: 'bob.builder@cnn.com', gender: 'Male', phone: '9876543218' }
  ]);

  cars = new MatTableDataSource<any>([
    { img:'car1.jpg',manufacturer: 'McLaren', model: '720S', bhp: 710, color : 'primary'},
    { img:'car2.jpg',manufacturer: 'Ferrari', model: 'SF90 Stradale', bhp: 890, color : 'warn'},
    { img:'car3.jpg',manufacturer: 'Ferrari', model: 'F8 Tributo', bhp: 730, color : 'primary'},
    { img:'car6.jpg',manufacturer: 'BMW', model: 'M1', bhp: 591, color: 'accent'},
    { img:'car4.jpg',manufacturer: 'Lamborghini', model: 'Huracán Evo', bhp: 691, color: 'primary'},
    { img:'car5.jpg',manufacturer: 'Ford', model: 'Ford GT', bhp: 647, color: 'accent'}
  ]);
  

  selection = new SelectionModel<any>(true, []);

  tableData = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' }
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  editUserDisplayedColumns: string[] = ['select', 'firstName', 'lastName', 'phone', 'email'];
  carsDisplayedColumns: string[] = ['img', 'manufacturer', 'model', 'bhp'];
  animationDone = false;


  constructor() { }

  ngOnInit(): void {

  }

  addUser() {
    console.log(this.user);
    this.users.data.push(this.user);
    this.users = new MatTableDataSource(this.users.data);
  }

  tabChanged(index : number) {
    this.selection.clear();
    this.users.data[3].disabled = false;
    this.users.data[5].disabled = false;
    if(index === 1){
      //Do It slowly to look cool
      setTimeout(() => {
        this.selection.select(this.users.data[1], this.users.data[3]);
        this.users.data[3].disabled = true;
        this.users.data[5].disabled = true;
      }, 500);
    }
  }
}
