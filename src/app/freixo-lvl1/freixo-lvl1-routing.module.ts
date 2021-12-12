import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreixoLvl1Page } from './freixo-lvl1.page';

const routes: Routes = [
  {
    path: '',
    component: FreixoLvl1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreixoLvl1PageRoutingModule {}
