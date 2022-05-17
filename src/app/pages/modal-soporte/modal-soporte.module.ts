import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSoportePageRoutingModule } from './modal-soporte-routing.module';

import { ModalSoportePage } from './modal-soporte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSoportePageRoutingModule
  ],
  declarations: [ModalSoportePage]
})
export class ModalSoportePageModule {}
