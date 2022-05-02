import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuDescriptionPage } from './menu-description.page';

const routes: Routes = [
  {
    path: '',
    component: MenuDescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuDescriptionPageRoutingModule {}
