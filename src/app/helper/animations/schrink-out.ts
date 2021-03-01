import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const schrinkOut = trigger('shrinkOut', [
  state('in', style({ height: '*' })),
  transition('* => void', [
    style({ height: '*' }),
    animate(250, style({ height: 0 })),
  ]),
]);
