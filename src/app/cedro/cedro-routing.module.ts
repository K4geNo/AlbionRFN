import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CedroPage } from './cedro.page';

const routes: Routes = [
  {
    path: '',
    component: CedroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CedroPageRoutingModule {}
