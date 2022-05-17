import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSoportePage } from './modal-soporte.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSoportePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSoportePageRoutingModule {}
