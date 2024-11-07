import { NgModule } from "@angular/core";
import { WeekDayPipe } from './week-day.pipe';

@NgModule(
    {
        declarations: [
            WeekDayPipe,

        ],
        exports: [
            WeekDayPipe,
        ],
    }
)

export class PipesModule {}