import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { PipesModule } from "../pipes/pipes.module";
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AngularMaterialModule } from "../material/angular-material.module";
import { PacientListComponent } from './pacient-list/pacient-list.component';

@NgModule({
    declarations: [ 
        HeaderComponent,
        BodyComponent,
        CalendarComponent,
        PacientListComponent,
    ],
    imports: [
        PipesModule,
        CommonModule,
        AngularMaterialModule,
    ],
    exports: [
        HeaderComponent,
        BodyComponent,
        CalendarComponent,
    ],
})

export class ComponentsModule {

}