import { Component, OnInit } from '@angular/core';
import { Employee } from '../interfaces/employee.interface';
import { v4 as uuid } from 'uuid';
import { ManagementService } from '../services/management.service';

@Component({
    selector: 'app-management-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    constructor( private managementServide: ManagementService){

    }

    get employees(){
        return this.managementServide.employees;
    }

    public onDeleteById( id: string ): void {
        this.managementServide.onDelete(id);
    }

    public onNewEmployee( employee: Employee): void {
        this.managementServide.onNewEmployee(employee);
    }
}