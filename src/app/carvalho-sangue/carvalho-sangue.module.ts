import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarvalhoSanguePageRoutingModule } from './carvalho-sangue-routing.module';

import { CarvalhoSanguePage } from './carvalho-sangue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarvalhoSanguePageRoutingModule
  ],
  declarations: [CarvalhoSanguePage]
})
export class CarvalhoSanguePageModule {}
