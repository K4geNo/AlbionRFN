import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreixoLvl3Page } from './freixo-lvl3.page';

const routes: Routes = [
  {
    path: '',
    component: FreixoLvl3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreixoLvl3PageRoutingModule {}
