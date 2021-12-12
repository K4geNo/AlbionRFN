import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PinhoLvl2PageRoutingModule } from './pinho-lvl2-routing.module';

import { PinhoLvl2Page } from './pinho-lvl2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinhoLvl2PageRoutingModule
  ],
  declarations: [PinhoLvl2Page]
})
export class PinhoLvl2PageModule {}
