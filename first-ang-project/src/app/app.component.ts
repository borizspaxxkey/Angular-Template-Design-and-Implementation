import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `
<p [@myAnimation]="animationState">I am learning to animate. </p>

<button (click)="animate()">Animate the paragraph.</button>
  `,
  styles: [``],
  animations: [
    trigger('myAnimation', [
      state('inactive', style({
        backgroundColor: '#eee'
      })),
      state('active', style({
        backgroundColor: '#ffcc00'
      })),

      transition('active <=> inactive', [
          animate('600ms ease-in-out', keyframes([
            style({transform: 'translateX(0)', backgroundColor: '#eee', offset: 0}),
            style({transform: 'translateX(50px) translateY(-10px)', offset: .5}),
            style({transform: 'translateX(0)', backgroundColor: '#ffcc00', offset: 1})
          ]))
      ]),
    ])
  ]
})
export class AppComponent {

  animationState = 'inactive';

  animate() {
    this.animationState = (this.animationState === 'inactive' ? 'active' : 'inactive');
  }
}
