import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import {ELEMENT_DATA, PeriodicElement,MORE_ELEMENT,Element_data_expandable} from '../tables/tables.model';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TablesComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  dataSourceForTable2 = ELEMENT_DATA.concat(MORE_ELEMENT);
  dataSourceForPagination=new MatTableDataSource<PeriodicElement>(this.dataSourceForTable2 );
  dataSourceForSorting=new MatTableDataSource<PeriodicElement>(this.dataSource)
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
///Table dynamically changing the columns displayed///
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: PeriodicElement[] = ELEMENT_DATA;
  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }
  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }
  shuffle() {
    let currentIndex = this.columnsToDisplay.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap
      let temp = this.columnsToDisplay[currentIndex];
      this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
      this.columnsToDisplay[randomIndex] = temp;
    }
  }
  ///Table dynamically changing the columns displayed///
  ///Table with expandable rows//
  dataSourceForExpandabletTable = Element_data_expandable;
  columnsToDisplayForExpandabletTable = ['name', 'weight', 'symbol', 'position'];
  expandedElement: PeriodicElement | null;
  ///Table with expandable rows//
  ///Table with filtering rows//
  dataSourceForFilteringRowsTable = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceForFilteringRowsTable.filter = filterValue.trim().toLowerCase();
  }
  ///Table with filtering rows//
  constructor() { }
  
  ngAfterViewInit(): void {
    this.dataSourceForPagination.paginator = this.paginator;
    this.dataSourceForSorting.sort = this.sort;
  }

  ngOnInit(): void {
  }

}
