import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';

import {GlobalService} from "./services/global.service";
import {ModalModule} from "ngx-bootstrap";

import {NotificationsComponent} from './components/notifications/notifications.component';
import {HomeComponent} from './components/home/home.component';


import {
    AddUpdateCustomerComponent,

} from "./components/add-update-customer/add-update-customer.component";

import {A2Edatetimepicker} from "ng2-eonasdan-datetimepicker";
import {TitlePipe} from './pipes/title/title.pipe';
import {ConfirmationModalComponent} from './components/confirmation-dialog/confirmation-dialog.component';


import {CustomerComponent} from './components/customer/customer.component';
import {CustomersComponent} from './components/customers/customers.component';



const appRoutes: Routes = [

    {path: '', component: CustomersComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        NotificationsComponent,

        HomeComponent,
        AddUpdateCustomerComponent,
        TitlePipe,
        ConfirmationModalComponent,

        CustomerComponent,
        CustomersComponent,

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        ModalModule.forRoot(),
        A2Edatetimepicker
    ],
    providers: [
        GlobalService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
