import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PauBrancoPage } from './pau-branco.page';

const routes: Routes = [
  {
    path: '',
    component: PauBrancoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PauBrancoPageRoutingModule {}
