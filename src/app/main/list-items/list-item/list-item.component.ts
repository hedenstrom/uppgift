import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from 'src/app/models/entry.model';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  faPlay = faPlay;
  @Input() entry: Entry;
  @Output() openClicked = new EventEmitter<Entry>();
  constructor() { }

  ngOnInit(): void {
  }

  onOpenClicked() {
    this.openClicked.emit(this.entry);
  }
}
