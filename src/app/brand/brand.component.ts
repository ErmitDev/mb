import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  menuOpen: Boolean;
  ss: SharedService;
  isOnDarkScreen: Boolean;
  subscription : null;
  subscription2 : null;

  constructor(ss: SharedService) {
    this.ss = ss; 
    this.isOnDarkScreen = true;
    this.menuOpen = this.ss.isMenuOpen();
   }

  ngOnInit() {
    this.subscription = this.ss.getIsOnDarkScreen()
      .subscribe(item => this.isOnDarkScreen=item);

    this.subscription2 = this.ss.getIfMenuOpen()
      .subscribe(item => this.menuOpen=item);
  }

}
