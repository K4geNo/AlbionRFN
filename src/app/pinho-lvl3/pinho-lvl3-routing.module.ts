import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PinhoLvl3Page } from './pinho-lvl3.page';

const routes: Routes = [
  {
    path: '',
    component: PinhoLvl3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinhoLvl3PageRoutingModule {}
