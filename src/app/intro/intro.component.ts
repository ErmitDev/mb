import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  isOnDarkScreen: Boolean;
  ss: SharedService;


  constructor(ss : SharedService) {
    this.isOnDarkScreen = true;
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

}
