import {Injectable, Pipe, PipeTransform} from "angular2/core";


export class Customer {
    $type: string;
    CustomerId: number;
    ArchticsId: string;
    CompanyName: string;
    Email: string;
    FirstName : string;
    LastName: string;
    MiddleName: string;

    InART: boolean;
    InCRM: boolean;
    IsSTH_PRE: boolean;


    constructor() {
        console.log("Instaciating Customer");
    }

    _Phones: Array<string>
    get Phones(): Array<string> {
        return this._Phones;
    }

    set Phones(phones: Array<string>) {
        this.Phones = phones;

        let contcat = "";
        for (let ph of this.Phones)
            contcat += ph + "; "

        this.AllPhones = contcat;

    }

    AllPhones: string;
}


@Pipe({
    name: "custFilter",
    pure: false
})
@Injectable()
export class CustomerPipe implements PipeTransform {


    transform(items: Customer[], pattern: string): any {

        return items.filter(item =>
            (item.AllPhones && item.AllPhones.indexOf(pattern) !== -1) ||
            (item.ArchticsId && item.ArchticsId.indexOf(pattern) !== -1) ||
            (item.CompanyName && item.CompanyName.indexOf(pattern) !== -1) ||
            (item.Email && item.Email.indexOf(pattern) !== -1) ||
            (item.FirstName && item.FirstName.indexOf(pattern) !== -1) ||
            (item.LastName && item.LastName.indexOf(pattern) !== -1) ||
            (item.MiddleName && item.MiddleName.indexOf(pattern) !== -1));

    }

}



