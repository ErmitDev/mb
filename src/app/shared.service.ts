import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class SharedService {
	@Output() fire: EventEmitter<any> = new EventEmitter();
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

}
