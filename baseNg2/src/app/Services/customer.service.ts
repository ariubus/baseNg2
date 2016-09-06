/// <reference path="../../../node_modules/angular2/typings/browser.d.ts" />



import {Injectable} from "angular2/core";

import {Http, Response, Headers} from "angular2/http";
import {Observable} from 'rxjs/Observable';


//// Statics
import 'rxjs/add/observable/throw';

//// Operators
import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/switchMap';
//import 'rxjs/add/operator/toPromise';

import {Customer} from "../Models/Customer";


@Injectable()
export class CustomerService {

    baseUrl = "api/customer/"
  



    constructor(private http: Http) {
        
    }

    getCustomersInSource(sourceId: string): Observable<Customer[]> {

        return this.http.post(this.baseUrl + "findbySourceId/" + sourceId, "")
            .map(this.extractCustomers)
            .catch(this.handleError);

    }

    getCustomersByIds(ids: string): Observable<Customer[]> {
        
        return this.http.post(this.baseUrl + "findbyids", ids)
            .map(this.extractCustomers)
            .catch(this.handleError);

    }

    getCustomersByFileIds(file: File): Observable<Customer[]> {

        return Observable.create(observer => {
            let formData: FormData = new FormData(),
                xhr: XMLHttpRequest = new XMLHttpRequest();

            //for (let i = 0; i < files.length; i++) {
                formData.append("file", file, file.name);
            //}

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    } else {
                        observer.error(xhr.response);
                    }
                }
            };

            xhr.upload.onprogress = (event) => {
             //   this.progress = Math.round(event.loaded / event.total * 100);

              //  this.progressObserver.next(this.progress);
            };

            xhr.open('POST', this.baseUrl + "findbyfileIds", true);
            xhr.send(formData);
        });

    }

    processCustomers(ids: number[]): Observable<Customer[]> {

        let body = JSON.stringify(ids);

        let headers: Headers = new Headers();
        headers.append("Content-type", "application/json");

        return this.http.post("api/customer/processcustomers", body, {headers: headers})
            .map(this.extractCustomers)
            .catch(this.handleError);

    }



    private extractCustomers(response: Response){
        let result = response.json();
        return result || [];
    }


    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }



}