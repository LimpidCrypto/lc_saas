import { Component } from '@angular/core';

@Component({
  selector: 'list-atom',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  constructor(public ordered: bool, public items: Array<any>) {}

}
