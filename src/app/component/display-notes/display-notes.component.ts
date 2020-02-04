import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { DailogboxComponent } from '../dailogbox/dailogbox.component';
import { NotesService } from 'src/app/service/notes.service';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { MatDialog } from '@angular/material';
import { ViewserviceService } from 'src/app/service/viewservice.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  @Input() notes: any;
  removable = true;
  selectable = true;
  direction = 'row';
  searchContent: any;
  @Input('master') searchText: any;
  
  constructor(
    private noteService: NotesService,
    private viewService: ViewserviceService,
    public dialog: MatDialog
  ) { this.viewService.currentView.subscribe(
    response =>
      this.change(response)
  );}

  ngOnInit() {
    console.log("search",this.searchText);
    
  }

  change(flag: boolean) {
    if (flag) {
      this.direction = 'column';
    } else {
      this.direction = 'row';
    }
  }

  openDialog(note: any): void {
    const dialogRef = this.dialog.open(DailogboxComponent, {
      width: '450px',
      height: 'auto',
      data: note
    });
  }
  onKey(event) {
    console.log(this.searchContent)
    // this.search.search(this.searchContent)
   //  this.router.navigateByUrl[('/search')]

  }
}


