
import { Component, OnInit, OnDestroy, Inject, Injectable } from '@angular/core';
import { EntriesService } from '.././services/entries.service';
import { Subscription } from 'rxjs';
import { Content } from '.././models/content';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit, OnDestroy {

  constructor(private entriesService: EntriesService,
              @Inject(DOCUMENT) private document: Document)  { }
  private subscription: Subscription = new Subscription();
  private pageNumbers = 40;
  showAsList = true;
  public content: Content = {
    entries: [],
    before: null,
    after: null
  };

  onScrollDown() {
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

  viewSelectorSelected(showAsList: boolean) {
    this.showAsList = showAsList;
    this.content = {
      entries: [],
      before: null,
      after: null
    };
    this.onScrollDown();
  }
  /**
   * Skrollar till toppen när man byter Vy
   */
  private scrollToTop() {
    setTimeout(() => {
      const obj = this.document.getElementById('scrollarea');
      if (obj) {
        obj.scrollTop = 0;
      }
    }, 200);
  }
}



