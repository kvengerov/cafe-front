import {Injectable} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CreatePopupService {

  constructor(
    private matDialog: MatDialog
  ) {
  }

  onCreatePopup(component) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    this.matDialog.open(component, dialogConfig);
  }
}
