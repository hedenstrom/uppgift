import { Component, OnInit, Input } from '@angular/core';
import { Entry } from 'src/app/models/entry.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input() entry: Entry;
  constructor() { }

  ngOnInit(): void {
  }

}
