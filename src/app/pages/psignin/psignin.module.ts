import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PsigninPageRoutingModule } from './psignin-routing.module';

import { PsigninPage } from './psignin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PsigninPageRoutingModule
  ],
  declarations: [PsigninPage]
})
export class PsigninPageModule {}
