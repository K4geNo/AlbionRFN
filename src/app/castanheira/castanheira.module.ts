import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CastanheiraPageRoutingModule } from './castanheira-routing.module';

import { CastanheiraPage } from './castanheira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CastanheiraPageRoutingModule
  ],
  declarations: [CastanheiraPage]
})
export class CastanheiraPageModule {}
