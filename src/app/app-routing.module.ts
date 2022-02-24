import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputBoxModule } from './modules/inputBox/inputBox.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/modules/inputBox/inputBox.module').then(m => m.InputBoxModule) // mistake
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
