import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter-app';
  numbers: number[] = [1, 2, 3, 4, 5];
  sum: number = 0;
  totalOfClicks: number = 0;

  increaseClicks() {
    this.totalOfClicks++;
  }

  increaseSum() {
    this.sum++;
  }

  decreaseSum() {
    this.sum--;
  }
}
