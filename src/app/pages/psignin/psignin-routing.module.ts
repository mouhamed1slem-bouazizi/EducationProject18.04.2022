import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsigninPage } from './psignin.page';

const routes: Routes = [
  {
    path: '',
    component: PsigninPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PsigninPageRoutingModule {}
