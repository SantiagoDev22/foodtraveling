import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuDescriptionPageRoutingModule } from './menu-description-routing.module';

import { MenuDescriptionPage } from './menu-description.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuDescriptionPageRoutingModule
  ],
  declarations: [MenuDescriptionPage]
})
export class MenuDescriptionPageModule {}
