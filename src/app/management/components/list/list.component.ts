import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../../interfaces/employee.interface';

@Component({
  selector: 'management-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeleteEmployee: EventEmitter<string> = new EventEmitter();

  @Input()
  public employeesList: Employee[] = [
    {
      id: '11161616161661',
      name: 'Ramon',
      lastname: 'Almanza Lozano',
      salary: 1489
    }
  ];

  onDelete(id: string): void {
    console.log({id});
    if(!id) return;

    this.onDeleteEmployee.emit(id);
  }
}
