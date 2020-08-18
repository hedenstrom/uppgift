import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from 'src/app/models/entry.model';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input() entry: Entry;
  @Output() selfTextClicked = new EventEmitter<Entry>();
  public faCommentAlt = faCommentAlt;
  public faPlay = faPlay;
  constructor() { }
  ngOnInit(): void {
  }
  onSelfTextClick() {
    if (this.entry.selftext) {
      this.selfTextClicked.emit(this.entry);
    }
  }
}
