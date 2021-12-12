import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CedroPageRoutingModule } from './cedro-routing.module';

import { CedroPage } from './cedro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CedroPageRoutingModule
  ],
  declarations: [CedroPage]
})
export class CedroPageModule {}
