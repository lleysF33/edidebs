import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuotationsPage } from './quotations.page';

const routes: Routes = [
  {
    path: '',
    component: QuotationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuotationsPageRoutingModule {}
