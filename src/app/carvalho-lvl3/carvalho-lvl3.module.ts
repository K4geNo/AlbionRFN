import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarvalhoLvl3PageRoutingModule } from './carvalho-lvl3-routing.module';

import { CarvalhoLvl3Page } from './carvalho-lvl3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarvalhoLvl3PageRoutingModule
  ],
  declarations: [CarvalhoLvl3Page]
})
export class CarvalhoLvl3PageModule {}
