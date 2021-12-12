import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PinhoLevel1PageRoutingModule } from './pinho-level1-routing.module';

import { PinhoLevel1Page } from './pinho-level1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinhoLevel1PageRoutingModule
  ],
  declarations: [PinhoLevel1Page]
})
export class PinhoLevel1PageModule {}
