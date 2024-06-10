import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ChildComponent} from "./child.component";
import {ColorsService} from "./colors.service";
import {ChildTwoComponent} from "./child-two.component";
import { CounterService } from './counter-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChildComponent, ChildTwoComponent],
  template: `
      <div class="container">
          <div class="card" [style.background]="changeBackground()">
              <div class="card-header">
                  <h1>Parent</h1>
                  <!-- <button (click)="incrementObs()">Increment obs</button>
                  <button (click)="incrementSignal()">Increment Signal</button> -->
              </div>
              <div class="card-content main-card-body">
                  <child/>
                  <child-two/>
              </div>
          </div>
      </div>
  `,
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private counterService = inject(CounterService)
  private colorsService = inject(ColorsService);

  incrementObs() {
    this.counterService.counter$.next(this.counterService.counter$.value + 1)
  }

  incrementSignal() {
    this.counterService.counter.update(v => v + 1)
  }

  changeBackground(){
    return  this.colorsService.getRandomColor();
  }
}
