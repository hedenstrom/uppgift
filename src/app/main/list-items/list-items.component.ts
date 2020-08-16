import { Component, OnInit, Input } from '@angular/core';
import { Entry } from 'src/app/models/entry.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  constructor() { }
@Input() entries: Observable<Entry[]>;
@Input() showAsList: boolean;
  ngOnInit(): void {
  }

}
