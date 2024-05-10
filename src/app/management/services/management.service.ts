import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class ManagementService {
    
    public employees: Employee[] = [
        {
            id: uuid(),
            name: 'Fernando',
            lastname: 'Valenzuela',
            salary: 1552,
        },
        {
            id: uuid(),
            name: 'Maria',
            lastname: 'Fernandez Lujan',
            salary: 85936,
        },
        {
            id: uuid(),
            name: 'Jorge',
            lastname: 'Rivera Martinez',
            salary: 12000,
        },
    ];

    onNewEmployee( employee: Employee): void {
        employee.id = uuid();//se le garega un id nuevo
        this.employees.push(employee);
    }

    onDelete( id:string ): void {
        console.log(`Desde main page ${id}`)
        this.employees = this.employees.filter(employee => employee.id !== id);
    }
    
}