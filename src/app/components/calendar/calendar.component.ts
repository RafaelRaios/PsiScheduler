// src/app/calendar/calendar.component.ts
import { Component, OnInit } from '@angular/core';
import { CalendarServiceService } from '../../services/calendar-service.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  currentDate: string = "";

  constructor(private calendarService: CalendarServiceService) {}

  ngOnInit() {
    this.calendarService.currentDate$.subscribe(date => {
      this.currentDate = format(date, 'dd-MM-yyyy');
    });
  }

  goToNextDay() {
    this.calendarService.goToNextDay();
  }

  goToPreviousDay() {
    this.calendarService.goToPreviousDay();
  }
}
