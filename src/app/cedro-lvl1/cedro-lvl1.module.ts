import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CedroLvl1PageRoutingModule } from './cedro-lvl1-routing.module';

import { CedroLvl1Page } from './cedro-lvl1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CedroLvl1PageRoutingModule
  ],
  declarations: [CedroLvl1Page]
})
export class CedroLvl1PageModule {}
