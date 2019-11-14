import { Component, OnInit } from '@angular/core';
import {ParseProviderService} from '../parse-provider.service';
import {cursosInterface} from '../../interfaces/cursosInterface';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  itemscursos: cursosInterface[]  = [];

  constructor(private parseProvider: ParseProviderService) {
    this.listcursos();
   }

   public listcursos(): Promise<any> {
    const offset = this.itemscursos.length;
    const limit = 10;
    return this.parseProvider.getItemscursos(offset, limit).then((result) => {
        for (const cursos of result) {
          this.itemscursos.push(cursos);
        }
    }, (error) => {
        console.log(error);
    });
}

  ngOnInit() {
  }

}




