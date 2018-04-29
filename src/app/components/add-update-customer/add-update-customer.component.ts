import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";
import {BsModalService} from "ngx-bootstrap";
import {ViewChild} from "@angular/core";

import {GlobalService} from "../../services/global.service";
import {Book} from "../../models/Book";
import {Customer} from "../../models/Customer";
import * as moment from 'moment';

@Component({
    selector: 'app-add-update-customer',
    templateUrl: './add-update-customer.component.html',
    styleUrls: ['./add-update-customer.component.css']
})
export class AddUpdateCustomerComponent implements OnInit {
    customerModel: Customer;// = new Customer(null);
    mode: string = 'new';
    modalRef: BsModalRef;
    btnText: string = 'Save';
    isFormSubmited = false;
    @ViewChild('modal') modal: TemplateRef<any>;
    options = {
        format: "DD.MM.YYYY",
        maxDate: moment()
    };

    constructor(private modalService: BsModalService, private service: GlobalService) {
    }

    ngOnInit() {
    }

    reset() {
        this.customerModel = new Customer(null);
        this.mode = 'new';
        this.btnText = 'Save';
    }

    openModal(customer: Customer) {
        this.reset();

        if (customer) {
            this.mode = 'edit';
            this.btnText = 'Update';

            this.customerModel=customer;


        }
        this.modalRef = this.modalService.show(this.modal);
    }

    saveOrUpdate(isValid: boolean) {
        this.isFormSubmited = true;
        if (!isValid) return;
        if (this.mode == 'edit') {
            this.service.updateCustomer(this.customerModel);

        } else {
           this.service.addCustomer(this.customerModel);
        }


        this.modalRef.hide();
    }


}
