import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-alpinism',
  templateUrl: './alpinism.component.html',
  styleUrls: ['./alpinism.component.css']
})
export class AlpinismComponent implements OnInit {

  isOnDarkScreen: Boolean;
  isOnLightScreen: Boolean;
  rowInView : Array<Boolean>;
  ss: SharedService;

  constructor(ss : SharedService) {
    this.isOnDarkScreen = true;
    this.isOnLightScreen = false;
    this.rowInView = [false, false, false, false, false];
    this.ss = ss;

   }

  ngOnInit() {
  }

  isDarkScreen = function(event){
    if(event.isOutsideView == this.isOnDarkScreen){
      this.isOnDarkScreen = !event.isOutsideView;
      this.ss.isOnDarkScreen(this.isOnDarkScreen);
    }
  }

  isLightScreen = function(event){
    this.isOnLightScreen = !event.isOutsideView;
  }

  animateRow = function(event, number){
    if(this.rowInView[number] != event.status){
      this.rowInView[number] = event.status;
    }
  }

}
