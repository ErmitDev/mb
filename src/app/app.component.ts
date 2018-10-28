import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  company : String;
  constructor(){
    this.company = "Marc Brulard";
  }

  ngOnInit() {
  }
  

}
