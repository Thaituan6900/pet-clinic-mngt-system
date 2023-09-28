import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customer.service';
import { DatePipe } from '@angular/common';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  providers: [DatePipe],
})
export class CustomerComponent implements OnInit {
  customers: Observable<any> | undefined;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customers = this.customerService.getCustomers().pipe(
      tap((response) => {
        console.log(response);
      })
    );
    // debugger;
  }
}
