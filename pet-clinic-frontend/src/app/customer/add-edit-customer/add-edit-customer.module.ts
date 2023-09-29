import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddEditCustomerComponent } from './add-edit-customer.component';



@NgModule({
  declarations: [
    AddEditCustomerComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule
  ],
  exports: [AddEditCustomerComponent]
})
export class AddEditCustomerModule { }
