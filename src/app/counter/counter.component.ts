import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() counterNum :number = 0;
  @Output() increaseClicks : EventEmitter<any> = new EventEmitter<any>();
  @Output() increaseSum : EventEmitter<any> = new EventEmitter<any>();
  @Output() decreaseSum : EventEmitter<any> = new EventEmitter<any>();
  countingValue=0;
  constructor() { }

  ngOnInit(): void {
  }

  increase(){
    this.countingValue ++;
    this.increaseClicks.emit();
    this.increaseSum.emit();
  }

  decrease(){
    this.countingValue --;
    this.increaseClicks.emit();
    this.decreaseSum.emit();
  }

}
