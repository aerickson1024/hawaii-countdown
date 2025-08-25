import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
  protected readonly title = signal('Hawaii Countdown');

    protected readonly countdown = signal(this.getCountdownToHawaii());

    constructor() {
      setInterval(() => {
        this.countdown.set(this.getCountdownToHawaii());
      }, 1000);
    }

    /**
     * Returns the difference between now and December 5, 2025 as an object with days, hours, minutes, seconds.
     */
    getCountdownToHawaii() {
      const target = new Date('2025-12-05T00:00:00');
      const now = new Date();
      let diff = target.getTime() - now.getTime();
      if (diff < 0) diff = 0;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= days * (1000 * 60 * 60 * 24);
      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * (1000 * 60 * 60);
      const minutes = Math.floor(diff / (1000 * 60));
      diff -= minutes * (1000 * 60);
      const seconds = Math.floor(diff / 1000);

      return { days, hours, minutes, seconds };
    }
}
