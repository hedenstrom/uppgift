import { Component, OnInit, Input, ViewContainerRef, Inject } from '@angular/core';
import { Entry } from 'src/app/models/entry.model';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SelfTextDialogComponent } from './self-text-dialog/self-text-dialog.component';
import { DetailsDialogComponent } from './details-dialog/details-dialog.component';

export interface DialogData {
  title: string;
  selfText: string;
}

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  constructor(public dialog: MatDialog, viewContainerRef: ViewContainerRef) { }

  @Input() entries: Observable<Entry[]>;
  @Input() showAsList: boolean;
  ngOnInit(): void {
  }
  onSelfTextClicked(entry: Entry) {
    const dialogRef = this.dialog.open(SelfTextDialogComponent, {
      width: '600px',
      height: '600px',
      data: entry
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  onOpenClicked(entry: Entry) {
    const dialogRef = this.dialog.open(DetailsDialogComponent, {
      width: '600px',
      height: '600px',
      data: entry
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

}

