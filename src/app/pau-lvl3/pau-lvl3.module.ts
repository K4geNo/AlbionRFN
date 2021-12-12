import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PauLvl3PageRoutingModule } from './pau-lvl3-routing.module';

import { PauLvl3Page } from './pau-lvl3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PauLvl3PageRoutingModule
  ],
  declarations: [PauLvl3Page]
})
export class PauLvl3PageModule {}
