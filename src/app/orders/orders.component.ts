import { Component, OnInit } from '@angular/core';
import { Order } from './order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  newOrderText = '';

  orders: Order[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addNewOrder() {
    this.orders.push(new Order(this.newOrderText))
    this.newOrderText = '';
  }

  getFiveMostRecentOrders(): Order[] {
    return this.orders.slice(-5)
  }

}
