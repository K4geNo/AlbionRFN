import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PauBrancoPageRoutingModule } from './pau-branco-routing.module';

import { PauBrancoPage } from './pau-branco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PauBrancoPageRoutingModule
  ],
  declarations: [PauBrancoPage]
})
export class PauBrancoPageModule {}
