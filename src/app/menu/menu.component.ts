import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger,group, state, animateChild } from '@angular/animations';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('menuTrigger', [
      state('in', style({        
        visibility: 'visible',
      	opacity: 1
      })),
      state('out', style({  
        visibility: 'hidden',      
        opacity: 0
      })),
      transition('in => out', animate(500)),
      transition('out => in', animate(500))
    ]),
  ]
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

  menuTrigger = function(){
    if(this.menuOpen)
      return 'in';
    else
      return 'out';
  }

}
