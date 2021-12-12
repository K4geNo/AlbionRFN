import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PauLvl1PageRoutingModule } from './pau-lvl1-routing.module';

import { PauLvl1Page } from './pau-lvl1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PauLvl1PageRoutingModule
  ],
  declarations: [PauLvl1Page]
})
export class PauLvl1PageModule {}
