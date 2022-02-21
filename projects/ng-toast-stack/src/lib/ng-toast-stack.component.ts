import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgToastStackService } from './ng-toast-stack.service';

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
  selector: 'ng-toast-stack',
  templateUrl: './ng-toast-stack.component.html',
  styleUrls: ['./ng-toast-stack.component.css'],
  animations: [listAnimation],
})
export class NgToastStackComponent implements OnInit {
  constructor(public ns: NgToastStackService) { }

  ngOnInit(): void { }
}
