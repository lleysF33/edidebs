import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuotationsPageRoutingModule } from './quotations-routing.module';

import { QuotationsPage } from './quotations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuotationsPageRoutingModule
  ],
  declarations: [QuotationsPage]
})
export class QuotationsPageModule {}
