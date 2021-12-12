import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BetulaPageRoutingModule } from './betula-routing.module';

import { BetulaPage } from './betula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BetulaPageRoutingModule
  ],
  declarations: [BetulaPage]
})
export class BetulaPageModule {}
