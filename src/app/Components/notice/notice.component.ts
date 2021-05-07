import { Component, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss'],
})
export class NoticeComponent implements DoCheck {
  @Input() note: number;
  noteArray = ['1','2','3','4','5'];
  noteArray2 = ['1','2','3','4','5'];
  constructor() { }

  ngDoCheck(){
    //console.log('___',this.note)
    if (this.note>0){
      this.noteArray.length = this.note
      this.noteArray2.length = (5 - this.note)
    }else {
      this.noteArray.length = 0
      this.noteArray2.length = 5
    }
  }

}