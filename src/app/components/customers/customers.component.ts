import {Component, OnInit, ViewChild} from '@angular/core';
import {GlobalService} from "../../services/global.service";
import {Customer} from "../../models/Customer";

import {NotificationsComponent} from "../notifications/notifications.component";

import {AddUpdateCustomerComponent} from  '../add-update-customer/add-update-customer.component'


@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
    @ViewChild('addUpdateModal') addUpdateModal: AddUpdateCustomerComponent;
    @ViewChild('notification') notification: NotificationsComponent;
    selectedCustomer:Customer;
    alertType: string;
    alertMessage: string;
    alertClass: string;
    constructor(private service: GlobalService) {
        this.service.customerListOnUpdate().subscribe((data: any) => {
            this.setNotification(data.error);
            this.notification.show();
            this.customers = data.customers;

        });
    }

    customers: Customer[];


    setNotification(error: any) {
        this.alertClass = error ? 'alert-danger' : 'alert-success';
        this.alertType = error ? 'Error' : 'Success';
        this.alertMessage = error || 'Books list was updated successfully';

    }
    ngOnInit() {
        this.service.getCustomer().subscribe((customers: Customer[]) => {
                this.customers = customers;
            }
        )
    }

    onEdit(customer: Customer) {
        this.selectedCustomer = customer;
        this.addUpdateModal.openModal(this.selectedCustomer);
    }

    onDelete(customer: Customer) {
        // this.customerToDelete = customer;
        // this.confirm.showConfirmationModal('Are you sure?', 'delete ' + customer.id + '?');

    }
}
