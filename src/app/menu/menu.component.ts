import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  ss : SharedService;
  menuOpen : Boolean; 
  subscription : null; 

  constructor(ss : SharedService) { 
    this.ss = ss;    
  	this.menuOpen = this.ss.isMenuOpen();
  }

  ngOnInit() {
    this.subscription = this.ss.getIfMenuOpen()
    .subscribe(item => this.menuOpen=item);
  }

}
