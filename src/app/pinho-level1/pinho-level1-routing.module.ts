import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PinhoLevel1Page } from './pinho-level1.page';

const routes: Routes = [
  {
    path: '',
    component: PinhoLevel1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinhoLevel1PageRoutingModule {}
