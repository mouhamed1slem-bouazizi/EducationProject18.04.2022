import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsignupPage } from './psignup.page';

const routes: Routes = [
  {
    path: '',
    component: PsignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PsignupPageRoutingModule {}
