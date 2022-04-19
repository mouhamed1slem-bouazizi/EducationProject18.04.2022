import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PstartPage } from './pstart.page';

const routes: Routes = [
  {
    path: '',
    component: PstartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PstartPageRoutingModule {}
