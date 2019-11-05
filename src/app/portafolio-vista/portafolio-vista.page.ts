import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-portafolio-vista',
  templateUrl: './portafolio-vista.page.html',
  styleUrls: ['./portafolio-vista.page.scss'],
})
export class PortafolioVistaPage implements OnInit {

  item: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe( params => {
      if (params && params.item) {
        this.item = JSON.parse(params.item);
      }
    });
  }

}
