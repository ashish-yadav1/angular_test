import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputBoxComponent } from './inputBox.component';
import { ButtonComponentModule } from '../buttonComponent/buttonComponent.module';

@NgModule({
  imports: [CommonModule, ButtonComponentModule, FormsModule, ReactiveFormsModule, RouterModule.forChild([{ path: '', component: InputBoxComponent }]) ],
  declarations: [InputBoxComponent],
})

export class InputBoxModule { }
