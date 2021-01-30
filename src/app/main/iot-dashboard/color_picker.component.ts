import { Component, EventEmitter, Inject, OnInit, Output, ViewContainerRef } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Cmyk, ColorPickerService } from 'ngx-color-picker';
import { DialogData } from './iot-dashboard.component';
// import { DialogData } from './iot-dashboard.component';
// export interface DialogData {
//     colorPicked :string
//   }
@Component({
  selector: 'app-color-picker',
  templateUrl: './color_picker.component.html',
})
export class ColorPickerComponent implements OnInit {
  @Output() colorPicked = new EventEmitter<string>();
  constructor(
    public dialogRef: MatDialogRef<ColorPickerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public vcRef: ViewContainerRef, private cpService: ColorPickerService
  ) { }

  ngOnInit(): void {
  }
 
  onNoClick(): void {
    this.dialogRef.close();
  }

  public toggle: boolean = false;

  public rgbaText: string = 'rgba(165, 26, 214, 0.2)';

  public arrayColors: any = {
    color1:  this.data.newBackGrndClr,
    color2: '#e920e9',
    color3: 'rgb(255,245,0)',
    color4: 'rgb(236,64,64)',
    color5: 'rgba(45,208,45,1)'
  };

  public selectedColor: string = 'color1';

  public color1: string =  this.data.newBackGrndClr;
  public color2: string = '#e920e9';
  public color3: string = '#fff500';
  public color4: string = 'rgb(236,64,64)';
  public color5: string = 'rgba(45,208,45,1)';
  public color6: string = '#1973c0';
  public color7: string = '#f200bd';
  public color8: string = '#a8ff00';
  public color9: string = '#278ce2';
  public color10: string = '#0a6211';
  public color11: string = '#f2ff00';
  public color12: string = '#f200bd';
  public color13: string = 'rgba(0,255,0,0.5)';
  public color14: string = 'rgb(0,255,255)';
  public color15: string = 'rgb(255,0,0)';
  public color16: string = '#a51ad633';
  public color17: string = '#666666';
  public color18: string = '#fa8072';

  public cmykValue: string = '';

  public cmykColor: Cmyk = new Cmyk(0, 0, 0, 0);

 
  public onEventLog(event: string, data: any): void {
    console.log(event, data);
  }

  public onChangeColor(color: string): void {
    console.log('Color changed:', color);
  }

  public onChangeColorCmyk(color: string): Cmyk {
    const hsva = this.cpService.stringToHsva(color);

    if (hsva) {
      const rgba = this.cpService.hsvaToRgba(hsva);

      return this.cpService.rgbaToCmyk(rgba);
    }

    return new Cmyk(0, 0, 0, 0);
  }

  public onChangeColorHex8(color: string): string {
    const hsva = this.cpService.stringToHsva(color, true);

    if (hsva) {
      return this.cpService.outputFormat(hsva, 'rgba', null);
    }

    return '';
  }
  colorSelected(event){
   this.data.newBackGrndClr=event
   console.log( this.data.newBackGrndClr);
   this.dialogRef.close(this.data.newBackGrndClr);
  }
}
