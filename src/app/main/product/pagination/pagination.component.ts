import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements AfterViewInit {
  // displayedColumns: string[] = [ 'product', 'weight', 'symbol'];
  displayedColumns: string[] = ['product', 'onhand', 'type'];
  dataSource = new MatTableDataSource<ProductsObj>(PRODUCT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface ProductsObj {
  warehouse: string;
  type: string;
  balance: boolean;
  classification: string;
  product: string;
  onhand: number;
}

const PRODUCT_DATA: ProductsObj[] = [
  {
    warehouse: 'warehouse 1',
    type: 'type 1',
    balance: true,
    classification: 'all',
    product: 'product 1',
    onhand: 5,
  },
  {
    warehouse: 'warehouse 2',
    type: 'type 1',
    balance: true,
    classification: 'all',
    product: 'product 1',
    onhand: 5,
  },
  {
    warehouse: 'warehouse 3',
    type: 'type 1',
    balance: true,
    classification: 'all',
    product: 'product 1',
    onhand: 5,
  },
  {
    warehouse: 'warehouse 1',
    type: 'type 2',
    balance: true,
    classification: 'all',
    product: 'product 1',
    onhand: 5,
  },
  {
    warehouse: 'warehouse 1',
    type: 'type 3',
    balance: true,
    classification: 'all',
    product: 'product 1',
    onhand: 5,
  },
  {
    warehouse: 'warehouse 1',
    type: 'type 3',
    balance: false,
    classification: 'all',
    product: 'product 1',
    onhand: 5,
  },
  {
    warehouse: 'warehouse 1',
    type: 'type 3',
    balance: false,
    classification: 'specific',
    product: 'product 2',
    onhand: 5,
  },
  {
    warehouse: 'warehouse 1',
    type: 'type 3',
    balance: false,
    classification: 'specific',
    product: 'product 3',
    onhand: 5,
  },
  {
    warehouse: 'warehouse 2',
    type: 'type 3',
    balance: true,
    classification: 'specific',
    product: 'product 2',
    onhand: 5,
  },
];
