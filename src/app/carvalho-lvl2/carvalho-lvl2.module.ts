import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarvalhoLvl2PageRoutingModule } from './carvalho-lvl2-routing.module';

import { CarvalhoLvl2Page } from './carvalho-lvl2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarvalhoLvl2PageRoutingModule
  ],
  declarations: [CarvalhoLvl2Page]
})
export class CarvalhoLvl2PageModule {}
