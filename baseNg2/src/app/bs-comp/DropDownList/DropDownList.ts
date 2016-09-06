import {Component, Input, Output, EventEmitter} from "angular2/core";




@Component({
    selector: "dropdownlist",
    template: `
<div class="dropdown">
    <button class="btn btn-default dropdown-toggle form-control" type="button" id="{{componentId}}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        {{initialText}}
        <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">

        <li *ngFor="let option of data" (click)="onItemClick(option)"><a href="#">{{option[nameField]}}</a></li>

    </ul>
</div>`
})
export class DropDownList {

    private initialText: string = "Select a value from the list";

    @Input() data: Object[];
    @Input() valueField: string;
    @Input() nameField: string;
    @Input('component-id') componentId: string = "dropDown1"; 

    @Output() onValueChanged = new EventEmitter<any>();

    constructor() {
        
    }

    onItemClick(option) {
        this.initialText = option[this.nameField];
        this.onValueChanged.emit(option);
    }



}
