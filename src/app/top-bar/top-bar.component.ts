import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  menuOpen: Boolean;
  isOnDarkScreen: Boolean;  
  ss : SharedService;  
  subscription : null;
  subscription2 : null;

  constructor(ss: SharedService) {
    this.ss = ss;
    this.isOnDarkScreen = true;
    this.menuOpen = this.ss.isMenuOpen();
   }

  ngOnInit() {
    this.subscription = this.ss.getIfMenuOpen()
      .subscribe(item => this.menuOpen=item);

    this.subscription2 = this.ss.getIsOnDarkScreen()
      .subscribe(item => this.isOnDarkScreen=item);
  }

  toggleMenu(){
    this.ss.toggleMenu();
  }

}
