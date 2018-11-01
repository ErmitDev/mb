import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-panel',
  templateUrl: './first-panel.component.html',
  styleUrls: ['./first-panel.component.css']
})
export class FirstPanelComponent implements OnInit {

  pathToPhoto : String;
  photos : Array<String>;
  indexPhoto: Number;

  constructor() {
    this.indexPhoto = 0;
    this.pathToPhoto = "/assets/images/photos/";
    this.photos = ['CanyonCorridor.jpg', 'Bivouac.jpg', 'BlueIce.jpg', 'GirlsOnBeach.jpg'];
  }

  ngOnInit() {
  }

  getPathPhoto(){
    return this.pathToPhoto.concat(this.photos[this.indexPhoto.valueOf()].toString());
  }

  previousPhoto(){
    if(this.indexPhoto != 0)
      this.indexPhoto = this.indexPhoto.valueOf() - 1;
    else
      this.indexPhoto = this.photos.length - 1;
  }

  nextPhoto(){
    if(this.indexPhoto != (this.photos.length -1))
      this.indexPhoto = this.indexPhoto.valueOf() + 1;
    else
      this.indexPhoto = 0;
  }


}
