import { Counter } from './../models/counter';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() {
    this.counter = new Counter();
   }

  public counter: Counter;
  public get account(): number {
    return this.counter.counter;
  }

  ngOnInit(): void {
  }

  public increase(): void {
    this.counter.increase();
  }

  public decrease(): void {
    this.counter.decrease();
  }
}
