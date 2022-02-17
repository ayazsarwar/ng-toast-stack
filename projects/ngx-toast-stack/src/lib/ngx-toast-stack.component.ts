import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgxToastStackService } from './ngx-toast-stack.service';

const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateX(32px)' }),
        stagger(
          '300ms',
          animate(
            '300ms ease',
            style({ opacity: 1, transform: 'translateX(0px)' })
          )
        ),
      ],
      { optional: true }
    ),
    query(
      ':leave',
      animate(
        '200ms ease-in-out',
        style({ opacity: 0, transform: 'translateY(32px)' })
      ),
      {
        optional: true,
      }
    ),
  ]),
]);

@Component({
  selector: 'ngx-toast-stack',
  templateUrl: './ngx-toast-stack.component.html',
  styleUrls: ['./ngx-toast-stack.component.css'],
  animations: [listAnimation],
})
export class NgxToastStackComponent implements OnInit {
  constructor(public ns: NgxToastStackService) { }

  ngOnInit(): void { }
}
