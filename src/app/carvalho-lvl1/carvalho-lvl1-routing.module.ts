import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarvalhoLvl1Page } from './carvalho-lvl1.page';

const routes: Routes = [
  {
    path: '',
    component: CarvalhoLvl1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarvalhoLvl1PageRoutingModule {}
