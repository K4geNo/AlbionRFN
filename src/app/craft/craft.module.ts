import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CraftPageRoutingModule } from './craft-routing.module';

import { CraftPage } from './craft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CraftPageRoutingModule
  ],
  declarations: [CraftPage]
})
export class CraftPageModule {}
