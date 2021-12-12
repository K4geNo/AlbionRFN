import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarvalhoLvl2Page } from './carvalho-lvl2.page';

const routes: Routes = [
  {
    path: '',
    component: CarvalhoLvl2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarvalhoLvl2PageRoutingModule {}
