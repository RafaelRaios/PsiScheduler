import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { addDays, subDays, format } from 'date-fns';
import { HolidayService } from './holiday-service.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarServiceService {
  private currentDateSubject = new BehaviorSubject<Date>(new Date());  // Data manipulável do calendário
  currentDate$ = this.currentDateSubject.asObservable();

  private absoluteDateSubject = new BehaviorSubject<Date>(new Date());  // Data absoluta que atualiza às 5h
  absoluteDate$ = this.absoluteDateSubject.asObservable();

  constructor(private readonly holidayService: HolidayService) {
    this.scheduleAbsoluteDateUpdate();
  }

  // Métodos para a data manipulável do calendário
  getCurrentFormattedDate(): string {
    return format(this.currentDateSubject.value, 'dd/MM/yyyy');
  }

  setCurrentDate(date: Date) {
    this.currentDateSubject.next(date);
  }

  goToNextDay() {
    const nextDay = addDays(this.currentDateSubject.value, 1);
    this.currentDateSubject.next(nextDay);
  }

  goToPreviousDay() {
    const prevDay = subDays(this.currentDateSubject.value, 1);
    this.currentDateSubject.next(prevDay);
  }

  getDayOfWeek(): string {
    return format(this.currentDateSubject.value, 'EEEE');
  }

  isTodayHoliday(state: string): string | null {
    const today = this.currentDateSubject.value;
    return this.holidayService.isHoliday(today, state);
  }

  // Método para agendar a atualização diária da data absoluta às 5h
  private scheduleAbsoluteDateUpdate() {
    const now = new Date();
    const nextUpdate = new Date();
    nextUpdate.setHours(5, 0, 0, 0); // Define a próxima atualização para 5h da manhã

    // Se já passou das 5h, define o próximo update para o dia seguinte às 5h
    if (now > nextUpdate) {
      nextUpdate.setDate(nextUpdate.getDate() + 1);
    }

    const timeUntilNextUpdate = nextUpdate.getTime() - now.getTime();

    // Agendamento para a primeira atualização às 5h
    //setTimeout(() => {
    //  this.updateAbsoluteDate();
      // Configura um intervalo diário de 24 horas para futuras atualizações
    //  setInterval(() => this.updateAbsoluteDate(), 24 * 60 * 60 * 1000);
    //}, timeUntilNextUpdate);
  }

  // Atualiza a data absoluta para o novo dia
  private updateAbsoluteDate() {
    this.absoluteDateSubject.next(new Date());
  }

  // Método para obter a data absoluta formatada
  getAbsoluteFormattedDate(): string {
    return format(this.absoluteDateSubject.value, 'dd/MM/yyyy');
  }
}
