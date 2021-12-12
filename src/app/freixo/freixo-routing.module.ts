import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreixoPage } from './freixo.page';

const routes: Routes = [
  {
    path: '',
    component: FreixoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreixoPageRoutingModule {}
