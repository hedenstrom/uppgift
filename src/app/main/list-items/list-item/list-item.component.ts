import { Component, OnInit, Input } from '@angular/core';
import { Entry } from 'src/app/models/entry.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() entry: Entry;
  constructor() { }

  ngOnInit(): void {
  }

}
