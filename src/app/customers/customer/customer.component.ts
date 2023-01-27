import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
})

export class CustomerComponent{
  name!: string;
  lastName!: string;
  dateBirth!: string;
  phone!: string;
}
