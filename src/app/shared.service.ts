import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class SharedService {
	@Output() fire: EventEmitter<any> = new EventEmitter();
	@Output() fire2: EventEmitter<any> = new EventEmitter();
    menuOpen: Boolean;
    
    constructor(){
        this.menuOpen = false;
    }

    isMenuOpen(){
        return this.menuOpen;
    }

    toggleMenu() {
		this.menuOpen = !this.menuOpen;
		this.fire.emit(this.menuOpen);
    }
    
    getIfMenuOpen() {
		return this.fire;
    }
    
    getIsOnDarkScreen(){
        return this.fire2;
    }

    isOnDarkScreen(bool){
		this.fire2.emit(bool);
	}

}
