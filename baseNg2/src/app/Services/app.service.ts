import {Injectable, Component} from "angular2/core";


import {CustomerService} from "./customer.service";
import {Customer} from "../Models/Customer";

@Component({
    providers: [ ]
})
@Injectable()
export class AppService {

    errorMessage;

    customers: Customer[] = [];

    constructor(private customerService: CustomerService) {
        
    }

    loadCustomersInSource(sourceId: string) {
        this.customerService.getCustomersInSource(sourceId)
            .subscribe(
            customers => this.setCustomers(customers),
            error => this.errorMessage = error);

    }
    

    addCustomersByIds(ids: string) {
        this.customerService.getCustomersByIds(ids)
            .subscribe(
            customers => this.addCustomers(customers),
            error => this.errorMessage = error);
    }

    uploadFile(file: File) {

        this.customerService.getCustomersByFileIds(file)
            .subscribe(
            customers => this.addCustomers(customers),
            error => this.errorMessage = error);
        
    }


    processCustomers(customers: Array<Customer>) {

        let ids: number[] = [];
        for (let cust of customers)
            ids.push(cust.CustomerId);
        
        this.customerService.processCustomers(ids)
            .subscribe(
            customers => this.updateCustomers(customers),
            error => this.errorMessage = error);
    }


    private setCustomers(customers) {
        this.customers = customers; 
    }
    private addCustomers(customers) {

        for (let cust of customers)
            this.customers.push(cust);
    }
    private updateCustomers(customers: Array<Customer>) {

        for (let sourceCust of customers)
        {
            for (let destCust of this.customers)
            {
                if (sourceCust.CustomerId == destCust.CustomerId) {
                    destCust.InART = sourceCust.InART;
                    destCust.InCRM = sourceCust.InCRM;
                    destCust.IsSTH_PRE = sourceCust.IsSTH_PRE;
                }
                continue;
            }
        }
            
    }


}