import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';

import { CustomerComponent } from './customer.component';
import { AddEditCustomerModule } from './add-edit-customer/add-edit-customer.module';

@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    PaginatorModule,
    ButtonModule,
    AddEditCustomerModule
  ],
  exports: [CustomerComponent],
})
export class CustomerModule {}
