import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreixoLvl1PageRoutingModule } from './freixo-lvl1-routing.module';

import { FreixoLvl1Page } from './freixo-lvl1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreixoLvl1PageRoutingModule
  ],
  declarations: [FreixoLvl1Page]
})
export class FreixoLvl1PageModule {}
