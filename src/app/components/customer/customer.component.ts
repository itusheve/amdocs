import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core";
import {Output} from "@angular/core";
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
    @Input() Customer;
    @Output() edit: EventEmitter<any> = new EventEmitter();
    @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor() {
  }
    editCustomer() {
        this.edit.emit(this.Customer);
    }
    deleteCustomer(){
        this.delete.emit(this.Customer);
    }

  ngOnInit() {
  }

}
