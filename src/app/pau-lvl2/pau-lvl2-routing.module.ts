import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PauLvl2Page } from './pau-lvl2.page';

const routes: Routes = [
  {
    path: '',
    component: PauLvl2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PauLvl2PageRoutingModule {}
