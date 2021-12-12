import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PinhoPage } from './pinho.page';

const routes: Routes = [
  {
    path: '',
    component: PinhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinhoPageRoutingModule {}
