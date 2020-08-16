
import { Component, OnInit, OnDestroy } from '@angular/core';
import { EntriesService } from '.././services/entries.service';
import { Subscription } from 'rxjs';
import { Content } from '.././models/content';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  constructor(private entriesService: EntriesService) { }
  private subscription: Subscription = new Subscription();
  private pageNumbers = 25;
  public content: Content = {
    entries: [],
    before: null,
    after: null
  };

  onScrollDown() {
    console.log('Scrolldown!!!!!');
    this.getEntries(this.pageNumbers, this.content.after);
  }

  ngOnInit(): void {
    this.onScrollDown();

  }

  getEntries(pageNumbers: number, after?: string) {
    const oldAfter = after;
    this.subscription.add(this.entriesService.getEntries(pageNumbers, after).subscribe((result) => {
      if (result) {
        this.content.after = result.after;
        this.content.entries = [...this.content.entries, ...result.entries];
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}



