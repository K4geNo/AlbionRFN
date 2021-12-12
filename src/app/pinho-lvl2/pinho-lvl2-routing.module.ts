import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PinhoLvl2Page } from './pinho-lvl2.page';

const routes: Routes = [
  {
    path: '',
    component: PinhoLvl2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinhoLvl2PageRoutingModule {}
