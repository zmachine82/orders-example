import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../orders/order';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  @Input() orders: Order[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
