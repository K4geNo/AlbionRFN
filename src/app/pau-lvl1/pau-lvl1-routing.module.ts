import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PauLvl1Page } from './pau-lvl1.page';

const routes: Routes = [
  {
    path: '',
    component: PauLvl1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PauLvl1PageRoutingModule {}
