// src/app/components/calendar/calendar.component.ts
import { Component } from '@angular/core';
import { CalendarServiceService } from '../../services/calendar-service.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html'
})
export class CalendarComponent {
  constructor(public calendarService: CalendarServiceService) {}

  goToNextDay() {
    this.calendarService.goToNextDay();
  }

  goToPreviousDay() {
    this.calendarService.goToPreviousDay();
  }

  onDateSelected(event: MatDatepickerInputEvent<Date>) {
    const selectedDate = event.value;
    if (selectedDate) {
      this.calendarService.setCurrentDate(selectedDate);
    }
  }
}
