import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CedroLvl1Page } from './cedro-lvl1.page';

const routes: Routes = [
  {
    path: '',
    component: CedroLvl1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CedroLvl1PageRoutingModule {}
