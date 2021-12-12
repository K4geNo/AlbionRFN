import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PinhoPageRoutingModule } from './pinho-routing.module';

import { PinhoPage } from './pinho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinhoPageRoutingModule
  ],
  declarations: [PinhoPage]
})
export class PinhoPageModule {}
