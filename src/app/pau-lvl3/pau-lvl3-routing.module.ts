import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PauLvl3Page } from './pau-lvl3.page';

const routes: Routes = [
  {
    path: '',
    component: PauLvl3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PauLvl3PageRoutingModule {}
