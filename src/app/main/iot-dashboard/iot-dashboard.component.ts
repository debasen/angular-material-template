import { AfterViewInit, Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ColorPickerComponent } from './color_picker.component';
import {AudioPlayerComponent} from '../../shared/audio-player/audio-player.component'
export interface DialogData {
  newBackGrndClr: string;
  // name: string;
}

@Component({
  selector: 'app-iot-dashboard',
  templateUrl: './iot-dashboard.component.html',
  styleUrls: ['./iot-dashboard.component.scss']
})
export class IotDashboardComponent implements OnInit{
  onColor=true;
  newBackGrndClr;
  constructor(public dialog: MatDialog) { }
 

  ngOnInit(): void {
  }
  openDialog(feat): void {
    const dialogRef = this.dialog.open(ColorPickerComponent, {
      width: '281px',
      data: {newBackGrndClr: feat.color}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if(result){
        feat.color = result;
      } 
    });
  }
  
  switchOff(){
    this.onColor=!this.onColor
  }
  home={
    rooms:["Bath Room",
            "Bed Room",
            "Living Room"],
    features:[{name:"Light 1",icon:"emoji_objects",on: true,color:"#ff0000"},
              {name:"Light 2",icon:"wb_incandescent",on: false,color:"#00ff00"},
              {name:"Light 3",icon:"wb_iridescent",on: true,color:"#0000ff"}]
  }
}
