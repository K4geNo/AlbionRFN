import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarvalhoLvl1PageRoutingModule } from './carvalho-lvl1-routing.module';

import { CarvalhoLvl1Page } from './carvalho-lvl1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarvalhoLvl1PageRoutingModule
  ],
  declarations: [CarvalhoLvl1Page]
})
export class CarvalhoLvl1PageModule {}
