import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PortafolioVistaPage } from './portafolio-vista.page';

const routes: Routes = [
  {
    path: '',
    component: PortafolioVistaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PortafolioVistaPage]
})
export class PortafolioVistaPageModule {}
