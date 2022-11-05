import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HrComponent } from './hr/hr.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [
        HrComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HrsModule {

}