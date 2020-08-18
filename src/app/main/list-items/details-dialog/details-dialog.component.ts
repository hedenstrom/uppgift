import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Entry } from 'src/app/models/entry.model';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.scss']
})
export class DetailsDialogComponent implements OnInit {

  entry: Entry;
  faCommentAlt = faCommentAlt;
  faPlay = faPlay;
  faTimes = faTimes;

  constructor(
    public dialogRef: MatDialogRef<DetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Entry) {
    this.entry = data;
  }
  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
