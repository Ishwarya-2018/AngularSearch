import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { UserIdentifier } from 'src/app/models/user-identifier';
import { Observable } from 'rxjs';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { NotesService } from 'src/app/service/notes.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DataService } from 'src/app/service/data.service';
import { ViewserviceService } from 'src/app/service/viewservice.service';
import {SearchServiceService} from '../../service/search-service.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showFiller = false;
  isGrid = true;
  Label: any;
  token: string;
  searchContent: any;
  constructor(
    private userService: UserService,
    private noteService: NotesService,
    private router: Router,
    public dialog: MatDialog,
    private dataService: DataService,
    private snackBar: MatSnackBar,
    private viewService: ViewserviceService,
    private search:SearchServiceService
    ) {

   }
  ngOnInit() {
   
   }

   notes() {
     this.router.navigateByUrl('/dashboard/notes');
   }
      logout() {
        localStorage.clear();
        this.router.navigateByUrl('/login');
      }

      changeView() {
        this.isGrid = !this.isGrid;
        this.viewService.changeView();
        }

   onKey() {
     this.search.search(this.searchContent)
    //  this.router.navigateByUrl[('/search')]
 
   }
   /*****
    @purpose:After click on the close button in the search input field if the input field not contain any text then the close button will be disable,if enter some text then the close button will enable
       ******/
   searchc() {
    //  this.searchContent = undefined;
   }
}
