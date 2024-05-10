import { NgModule } from '@angular/core';
import { MainPageComponent } from './pages/main-page.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ListComponent } from './components/list/list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule, //nunca borrar el commomModule
        FormsModule
    ],
    exports: [
        MainPageComponent
    ],
    declarations: [
        MainPageComponent,
        AddEmployeeComponent,
        ListComponent
    ],
    providers: [],
})
export class ManegementModule { }
