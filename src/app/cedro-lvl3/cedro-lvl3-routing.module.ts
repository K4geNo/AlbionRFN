import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CedroLvl3Page } from './cedro-lvl3.page';

const routes: Routes = [
  {
    path: '',
    component: CedroLvl3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CedroLvl3PageRoutingModule {}
