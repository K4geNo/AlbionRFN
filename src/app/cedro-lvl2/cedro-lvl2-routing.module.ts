import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CedroLvl2Page } from './cedro-lvl2.page';

const routes: Routes = [
  {
    path: '',
    component: CedroLvl2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CedroLvl2PageRoutingModule {}
