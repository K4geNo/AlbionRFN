import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PinhoLvl3PageRoutingModule } from './pinho-lvl3-routing.module';

import { PinhoLvl3Page } from './pinho-lvl3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinhoLvl3PageRoutingModule
  ],
  declarations: [PinhoLvl3Page]
})
export class PinhoLvl3PageModule {}
