import { Component, OnInit, OnDestroy } from '@angular/core';
import { EntriesService } from './services/entries.service';
import { Subscription } from 'rxjs';
import { Content } from './models/content';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  constructor() { }

}


