import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { startOfDay, addDays, subDays } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class CalendarServiceService {
  private currentDateSubject = new BehaviorSubject<Date>(startOfDay(new Date()));
  currentDate$ = this.currentDateSubject.asObservable();

  goToNextDay() {
    const nextDay = addDays(this.currentDateSubject.value, 1);
    this.currentDateSubject.next(nextDay);
  }

  goToPreviousDay() {
    const prevDay = subDays(this.currentDateSubject.value, 1);
    this.currentDateSubject.next(prevDay);
  }
}
