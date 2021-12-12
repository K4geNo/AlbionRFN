import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreixoLvl2Page } from './freixo-lvl2.page';

const routes: Routes = [
  {
    path: '',
    component: FreixoLvl2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreixoLvl2PageRoutingModule {}
