import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
  private customers = [
    {
      id: 1,
      firstName: 'Tuan',
      lastName: 'Nguyen',
      email: 'tuan@gmail.com',
      dob: '2000-09-06T17:00:00.000Z',
      gender: 'male',
      phone: '0123456789',
    },
    {
      id: 2,
      firstName: 'Leo',
      lastName: 'Messi',
      email: 'm10@goat2.com',
      dob: '2000-09-06T17:00:00.000Z',
      gender: 'male',
      phone: '0123456712',
    },
    {
      id: 3,
      firstName: 'Cristiano',
      lastName: 'Ronaldo',
      email: 'cr7@goat1.com',
      dob: '2000-09-06T17:00:00.000Z',
      gender: 'male',
      phone: '0123456798',
    },
  ];

  getCustomers() {
    return this.customers;
  }
}
