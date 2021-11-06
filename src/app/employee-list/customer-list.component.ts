
import { Observable } from "rxjs";
import { CustomerService } from "../customer.service";
import { Customer } from "../customer";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import {UserDepartment} from "../userDepartment";
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SearchCustomerRequest } from '../searchCustomerRequest';
import {first} from "rxjs/operators";

@Component({
  selector: "app-employee-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.css"]
})

export class CustomerListComponent implements OnInit {
  customers: Observable<Customer[]>;
  userDeps: Observable<UserDepartment[]>;
  selectedDep: number = 0;

  page = 1;
  count = 0;
  tableSize = 5;
  tableSizes = [5, 10, 30, 50, 70, 100];
  submitted = false;
  loading = false;

  searchCustomerResults: Array<Customer> = [];

  searchForm: FormGroup = this.formBuilder.group({
    country: new FormControl('', []),
    valid: new FormControl('', [])
  });

  constructor(private formBuilder: FormBuilder, private customerService: CustomerService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
    this.selectedDep = 0;
  }

  reloadData() {
    this.customers = this.customerService.getCustomersList();
    this.userDeps = this.customerService.getCustomersList();
  }

  get formGroupControls() {
    return this.searchForm.controls;
  }

  submitSearch() {
    this.submitted = true;
    // reset alerts on submit
    this.loading = true;
    const country = this.searchForm.get('country')?.value
    const valid = this.searchForm.get('valid')?.value
    this.searchCustomerResults = [];
    if (country || valid) {
      const searchCustomerRequest: SearchCustomerRequest = {
        country: country,
        valid: valid
      };
      this.customers = this.customerService.searchCustomer(searchCustomerRequest);
      this.customerService.searchCustomer(searchCustomerRequest)
        .pipe(first())
        .subscribe(
          data => {
            // if (data === null) {
            //   this.translate.get('NO_DATA_FOUND').subscribe(value => {
            //     this.alertService.error(value);
            //   });
            // }
            this.searchCustomerResults = [];
            this.searchCustomerResults = data;
            this.loading = false;
          },
          error => {
            // this.alertService.error(error);
            this.loading = false;
          });
    } else {
      // this.translate.get('PLEASE_FILL_ONE_FIELD_AT_LEAST').subscribe(value => {
      //   this.alertService.error(value);
      // });
      this.loading = false;
    }
  }

  onTableDataChange(event: any){
    this.page = event;
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }
}
