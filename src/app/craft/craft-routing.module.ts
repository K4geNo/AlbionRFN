import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CraftPage } from './craft.page';

const routes: Routes = [
  {
    path: '',
    component: CraftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CraftPageRoutingModule {}
