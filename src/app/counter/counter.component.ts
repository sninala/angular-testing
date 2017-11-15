import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {

  count: number;
  constructor() { 
    this.count = 1;
  }
  increment(){
    this.count++;
  }
  decrement(){
    this.count--;
  }

  ngOnInit() {
  }

}
