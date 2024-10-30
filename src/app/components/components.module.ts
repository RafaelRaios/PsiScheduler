import { NgModule } from "@angular/core";
import { PipesModule } from "../pipes/pipes.module";
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
    declarations: [ 
        HeaderComponent,
        BodyComponent,
        CalendarComponent,
    ],
    imports: [
        PipesModule,
    ],
    exports: [
        HeaderComponent,
        BodyComponent,
    ],
})

export class ComponentsModule {

}