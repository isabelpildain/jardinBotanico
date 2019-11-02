import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ParseProviderService} from '../parse-provider.service';

@Component({
  selector: 'app-plantas-view',
  templateUrl: './plantas-view.page.html',
  styleUrls: ['./plantas-view.page.scss'],
})
export class PlantasViewPage implements OnInit {

  item: any;

  constructor(private route: ActivatedRoute, private router: Router, private parseProvider: ParseProviderService) {
    this.route.queryParams.subscribe( params => {
      if (params && params.id) {
        this.parseProvider.getItemPlantasArticulo(params.id).then( (item) => {
          this.item = item;
        });
      }
    });
  }

  ngOnInit() {}

}
