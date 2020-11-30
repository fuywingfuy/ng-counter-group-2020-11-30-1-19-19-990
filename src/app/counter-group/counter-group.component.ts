import { Component, Input, OnInit } from '@angular/core';
import { CounterGroupService } from '../service/counter-group';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent implements OnInit {

  public size: number = 5;

  public counters = this.counterGroupService.counters;

  constructor(private counterGroupService: CounterGroupService) {
  }

  ngOnInit(): void {
  }

  public sum(): number {
    return this.counterGroupService.sum();
  }

  public setSize(): void {
    this.counterGroupService.setSize(this.size);
    this.counters = this.counterGroupService.counters;
  }
}
