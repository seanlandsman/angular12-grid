import {Component} from '@angular/core';
import {ColDef} from '@ag-grid-community/core';

import {ClientSideRowModelModule} from '@ag-grid-community/client-side-row-model';
import {RowGroupingModule} from '@ag-grid-enterprise/row-grouping';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public modules: any[] = [ClientSideRowModelModule, RowGroupingModule];

    columnDefs: ColDef[] = [
        {field: 'make', rowGroup: true},
        {field: 'model'},
        {field: 'price'}
    ];

    rowData = [
        {make: 'Toyota', model: 'Celica', price: 35000},
        {make: 'Toyota', model: 'Celica 2', price: 45000},
        {make: 'Toyota', model: 'Celica 3', price: 55000},
        {make: 'Ford', model: 'Mondeo', price: 32000},
        {make: 'Porsche', model: 'Boxster', price: 72000}
    ];

}
