import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ButtonComponent } from './buttonComponent.component';


@NgModule({
  imports: [CommonModule ],
  exports: [ButtonComponent],
  declarations: [ButtonComponent],
})

export class ButtonComponentModule { }
