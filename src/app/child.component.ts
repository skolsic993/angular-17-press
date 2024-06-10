import { Component, inject } from '@angular/core';

import { ColorsService } from './colors.service';
import { GrandChildComponent } from './grand-child.component';

@Component({
  standalone: true,
  selector: 'child',
  template: `
    <div class="card" [style.background]="changeBackground()">
      <div class="card-header">
        <h1>Product component</h1>
      </div>
      <div class="card-content">
        <grand-child />
      </div>
    </div>
  `,
  imports: [GrandChildComponent],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  private colorsService = inject(ColorsService);

  changeBackground() {
    return this.colorsService.getRandomColor();
  }
}
