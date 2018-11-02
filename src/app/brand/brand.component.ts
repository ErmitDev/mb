import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  ss: SharedService;
  isOnDarkScreen: Boolean;
  subscription : null;

  constructor(ss: SharedService) {
    this.ss = ss; 
    this.isOnDarkScreen = true;
   }

  ngOnInit() {
    this.subscription = this.ss.getIsOnDarkScreen()
      .subscribe(item => this.isOnDarkScreen=item);
  }

}
