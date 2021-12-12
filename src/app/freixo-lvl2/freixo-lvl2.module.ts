import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreixoLvl2PageRoutingModule } from './freixo-lvl2-routing.module';

import { FreixoLvl2Page } from './freixo-lvl2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreixoLvl2PageRoutingModule
  ],
  declarations: [FreixoLvl2Page]
})
export class FreixoLvl2PageModule {}
