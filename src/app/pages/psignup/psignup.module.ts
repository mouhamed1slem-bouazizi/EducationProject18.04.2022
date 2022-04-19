import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PsignupPageRoutingModule } from './psignup-routing.module';

import { PsignupPage } from './psignup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PsignupPageRoutingModule
  ],
  declarations: [PsignupPage]
})
export class PsignupPageModule {}
