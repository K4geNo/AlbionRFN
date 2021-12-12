import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CedroLvl2PageRoutingModule } from './cedro-lvl2-routing.module';

import { CedroLvl2Page } from './cedro-lvl2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CedroLvl2PageRoutingModule
  ],
  declarations: [CedroLvl2Page]
})
export class CedroLvl2PageModule {}
