import {Component, Input} from "angular2/core";


@Component({
    selector : "my-grid"
})
export class Grid {

    @Input() columns: GridColumn[];

}


export class GridColumn {

    header: string;
    dataField: string;
    width: number;

}