import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CedroLvl3PageRoutingModule } from './cedro-lvl3-routing.module';

import { CedroLvl3Page } from './cedro-lvl3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CedroLvl3PageRoutingModule
  ],
  declarations: [CedroLvl3Page]
})
export class CedroLvl3PageModule {}
