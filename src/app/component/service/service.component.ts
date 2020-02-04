import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog,MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data, private router: Router,private dialog:MatDialog) { }

  ngOnInit() {
  }
/**
 * @description this method is for close the dialog box
 * @returns nothing
 */
close(): void {
  try {
    // this.dialogRef.close();
    this.dialog.closeAll();

  } catch (error) {
    console.log('error in close in service Component');

  }
}


/**
 * @description this method is for navigating the page to register with selected sevice
 */
Checkout() {
  // this.dialogRef.close();
  this.dialog.closeAll();
  this.router.navigate(['register']);
}
}
