import { Component, inject } from '@angular/core';

import { ColorsService } from './colors.service';
import { GrandChildComponent } from './grand-child.component';

@Component({
  standalone: true,
  selector: 'child-two',
  template: `
    <div class="card" [style.background]="changeBackground()">
      <div class="card-header">
        <h1>Child two component</h1>
      </div>
    </div>
  `,
  imports: [GrandChildComponent],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildTwoComponent {
  private colorsService = inject(ColorsService);

  changeBackground() {
    return this.colorsService.getRandomColor();
  }
}
