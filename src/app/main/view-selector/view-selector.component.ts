import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTh } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-selector',
  templateUrl: './view-selector.component.html',
  styleUrls: ['./view-selector.component.scss']
})
export class ViewSelectorComponent implements OnInit {
  @Output() showAsListselected = new EventEmitter<boolean>();
  public showAsList = true;
  public faBars = faBars;
  public faTh = faTh;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(showAsList: boolean) {
    this.showAsList = showAsList;
    this.showAsListselected.emit(showAsList);
  }
}
