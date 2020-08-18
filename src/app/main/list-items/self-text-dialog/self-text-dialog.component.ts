import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Entry } from 'src/app/models/entry.model';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-self-text-dialog',
  templateUrl: './self-text-dialog.component.html',
  styleUrls: ['./self-text-dialog.component.scss']
})
export class SelfTextDialogComponent implements OnInit {
  public faTimes = faTimes;
  public title: string;
  public selftext: string;

  constructor(
    public dialogRef: MatDialogRef<SelfTextDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Entry) {
      this.title = data.title;
      this.selftext = data.selftext;
    }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
