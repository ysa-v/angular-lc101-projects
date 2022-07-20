import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'http://clipart-library.com/images/dT4Azx7Te.gif';
  image3 = 'https://raisingchildren.net.au/__data/assets/image/0016/48022/baby-development-3-monthsnarrow.jpg';

  constructor() { }

  ngOnInit() {
  }

}