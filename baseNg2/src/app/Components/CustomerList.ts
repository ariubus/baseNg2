import {Component} from "angular2/core"

import {AppService} from "../Services/app.service";
import {Customer, CustomerPipe} from "../Models/Customer";
import {SourceOpt} from "../Models/SourceOpt";
import {GridColumn} from "../bs-comp/grid";
import {DropDownList} from "../bs-comp/DropDownList/DropDownList";

@Component({
    selector: "customer-list",
    templateUrl: "/app/customerlist",
    directives: [DropDownList],
    pipes: [CustomerPipe]
})
export class CustomerList {

    gridColumns: GridColumn[] = [
        { dataField: "CustomerId", header: "S$Id", width:1 },
        { dataField: "InART", header: "InART", width:1 },
        { dataField: "InCRM", header: "InCRM", width:1 },
        { dataField: "STH/PRE", header: "STH/PRE", width:1 },
        { dataField: "FirstName", header: "Firstname", width:1 },
        { dataField: "LastName", header: "Lastname", width:1 },
        { dataField: "Company", header: "Company", width:1 },
        { dataField: "Email", header: "Email", width:3 },
        { dataField: "AllPhones", header: "Phones", width: 2 }
    ];

    sources: SourceOpt[] = [
        { displayName: "Group Sales For Migration", id: "GroupSalesForMigration" },
        { displayName: "Individual Sales For Migration", id: "IndividualSalesForMigration" },
        { displayName: "Add or upload manually", id: "manually" }

    ];

    searchExp: string = "";
    csvCustomers: string;
    sourceSelected: boolean = true;
    file: File;

    constructor(private appService: AppService) {

        

    }

    
    onSourceChanged(source: SourceOpt) {

        if (source.id == "manually") {
            this.sourceSelected = false;
        }
        else {
            this.sourceSelected = true;
        }

         this.appService.loadCustomersInSource(source.id);

        console.debug(source.displayName);
    }

    onAddClick() {
        this.appService.addCustomersByIds(this.csvCustomers);
        
    }


    onFileChange(event) {
        this.file = event.srcElement.files[0];
        console.log(this.file);
    }


    onUploadFileClick () {
        this.appService.uploadFile(this.file);
        

    }

    onImportClick() {


        let customerPipe = new CustomerPipe();
        let customers: Customer[] = customerPipe.transform(this.appService.customers, this.searchExp);

        this.appService.processCustomers(customers);
    }

}