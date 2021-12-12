import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreixoPageRoutingModule } from './freixo-routing.module';

import { FreixoPage } from './freixo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreixoPageRoutingModule
  ],
  declarations: [FreixoPage]
})
export class FreixoPageModule {}
