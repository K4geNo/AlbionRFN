import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BetulaPage } from './betula.page';

const routes: Routes = [
  {
    path: '',
    component: BetulaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BetulaPageRoutingModule {}
