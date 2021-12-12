import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreixoLvl3PageRoutingModule } from './freixo-lvl3-routing.module';

import { FreixoLvl3Page } from './freixo-lvl3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreixoLvl3PageRoutingModule
  ],
  declarations: [FreixoLvl3Page]
})
export class FreixoLvl3PageModule {}
