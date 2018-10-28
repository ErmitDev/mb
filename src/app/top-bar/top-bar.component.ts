import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  menuOpen: Boolean;  
  ss : SharedService;  
  subscription : null;

  constructor(ss: SharedService) {
    this.ss = ss;
    this.menuOpen = this.ss.isMenuOpen();
   }

  ngOnInit() {
    this.subscription = this.ss.getIfMenuOpen()
      .subscribe(item => this.menuOpen=item);
  }

  toggleMenu(){
    this.ss.toggleMenu();
  }

}
