import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const openCloseAnimation2 = trigger('openClose', [
  state(
    'open',
    style({
      width: '250px',
      opacity: 1,
      backgroundColor: 'yellow',
    })
  ),
  state(
    'closed',
    style({
      width: '100px',
      opacity: 0.5,
      backgroundColor: 'green',
    })
  ),
  transition('open => closed', [animate('1s')]),
  transition('closed => open', [animate('1s')]),
]);
