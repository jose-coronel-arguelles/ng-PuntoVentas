import { Component } from "@angular/core";
import { CustomerComponent } from "../customer/customer.component";

@Component({
  selector:'app-customerList',
  templateUrl:'./customerList.component.html'
})

export class CustomerListComponent{
  customerList: CustomerComponent[]=[
    {name:'Jose',
      lastName:'Coronel',
      dateBirth:'1987-12-20',
      phone:'954647835'
    },
    {name:'Ricardo',
      lastName:'Coronel',
      dateBirth:'1984-04-04',
      phone:'954647835'
    }    ,
    {name:'Irene',
      lastName:'Coronel',
      dateBirth:'1997-09-13',
      phone:'954647835'
    }
  ]
}
