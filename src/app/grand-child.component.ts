import {ChangeDetectionStrategy, Component, inject, signal} from "@angular/core";
import {ColorsService} from "./colors.service";
import { CounterService } from "./counter-service";
import { AsyncPipe, CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: 'grand-child',
  imports: [AsyncPipe],
  template: `
      <div class="card" [style.background]="changeBackground()">
          <div class="card-header">
              <h1>Grand Child</h1>
              <!-- <h1>Grand Child Obs: {{ counterService.counter$ | async }}</h1>
              <h1>Grand Child Signal: {{ counterService.counter() }}</h1> -->
              <button (click)="increment()">Increment obs</button>
          </div>
      </div>
      `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandChildComponent {
  counterService = inject(CounterService)
  private colorsService = inject(ColorsService);

  counter = signal(0);

  changeBackground(){
    return  this.colorsService.getRandomColor();
  }

  increment(){
    this.counter.update(v => v + 1);
  }
}
