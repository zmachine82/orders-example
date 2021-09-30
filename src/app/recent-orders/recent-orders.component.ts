import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../orders/order';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.css']
})
export class RecentOrdersComponent implements OnInit {

  @Input() orders: Order[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
