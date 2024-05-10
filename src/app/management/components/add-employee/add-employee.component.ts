import { Component, EventEmitter, Output } from '@angular/core';
import { Employee } from '../../interfaces/employee.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'management-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  //exponemos al mundo exterior
  @Output()
  public onNewEmployee: EventEmitter<Employee> = new EventEmitter();  

  public employee: Employee = {
    id: uuid(),
    name: '',
    lastname: '',
    salary: 0,
  }

  employeeEmit(): void {

    if(this.employee.name.length === 0) return;

    // console.log(this.employee);
    this.onNewEmployee.emit(this.employee);

    this.employee = {id: '', name: '', lastname: '', salary: 0};
  }

}
