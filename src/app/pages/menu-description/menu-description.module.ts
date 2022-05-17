import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuDescriptionPageRoutingModule } from './menu-description-routing.module';

import { MenuDescriptionPage } from './menu-description.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuDescriptionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MenuDescriptionPage]
})
export class MenuDescriptionPageModule {}
