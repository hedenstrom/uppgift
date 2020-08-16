import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Entry } from '../models/entry.model';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {

  constructor(private http: HttpClient) { }
  /**
   * Hämtar Entries från reddit-apiet (hämtar entries från sweden.json)
   * @param pages antal sidor som skall hämtas
   * @param after vad som kommer när man går framåt
   * @param before vad som kommer innan när man går bakåt
   */
  getEntries(pageNumbers: number, after?: string): Observable<Content> {
    return this.http.get(this.getUrl(pageNumbers, after))
      .pipe(
        map(data => this.createContentFromResponse(data))
      );
  }
  private getUrl(pageNumbers: number, after?: string) {
    let url = `https://www.reddit.com/r/sweden.json?limit=${pageNumbers}`;
    return after ? url += `&after=${after}` : url;
  }
  /**
   * Plockar ut relevant innehåll
   * @param data responsen ifrån reddit
   */
  private createContentFromResponse(data: any): Content {
    const entries = new Array<Entry>();
    data.data.children.forEach((item: {
      data: {
        thumbnail: any;
        created: any; num_comments: number; author: string; score: number; permalink: string; title: string; selftext: string; name: string
      };
    }) => {
      const entry: Entry = {
        thumbnail: item.data.thumbnail,
        created: this.parseDate(item.data.created), // Konverterar till läsbart datum
        num_comments: item.data.num_comments,
        author: item.data.author,
        score: item.data.score,
        permalink: item.data.permalink,
        title: item.data.title,
        selftext: item.data.selftext,
        name: item.data.name // good to have
      };
      entries.push(entry);
    });

    return { after: data.data.after, before: data.data.before, entries };
  }

  /**
   * Konverterar Unix timestamp till datum med svenskt format
   * @param date Unix timestamp
   */
  private parseDate(date: number): string {
    const newDate = new Date(date * 1000).toLocaleDateString('sv-SE');
    return newDate;
  }
}
