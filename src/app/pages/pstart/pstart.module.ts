import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PstartPageRoutingModule } from './pstart-routing.module';

import { PstartPage } from './pstart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PstartPageRoutingModule
  ],
  declarations: [PstartPage]
})
export class PstartPageModule {}
