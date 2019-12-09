import { Component, OnInit } from '@angular/core';
import{ InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-silvicultura',
  templateUrl: './silvicultura.page.html',
  styleUrls: ['./silvicultura.page.scss'],
})
export class SilviculturaPage implements OnInit {

  constructor(private iab:InAppBrowser) { }

  ngOnInit() {
  }

  openUrl(){    
  
    this.iab.create('https://www.botanicomedellin.org' ,'_self')
  }


}
