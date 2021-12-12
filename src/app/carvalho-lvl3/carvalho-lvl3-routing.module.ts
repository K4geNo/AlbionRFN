import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarvalhoLvl3Page } from './carvalho-lvl3.page';

const routes: Routes = [
  {
    path: '',
    component: CarvalhoLvl3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarvalhoLvl3PageRoutingModule {}
