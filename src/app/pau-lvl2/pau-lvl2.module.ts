import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PauLvl2PageRoutingModule } from './pau-lvl2-routing.module';

import { PauLvl2Page } from './pau-lvl2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PauLvl2PageRoutingModule
  ],
  declarations: [PauLvl2Page]
})
export class PauLvl2PageModule {}
