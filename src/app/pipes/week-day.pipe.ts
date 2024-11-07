import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekDay'
})
export class WeekDayPipe implements PipeTransform {

  transform(day: string): string {
    if(day === 'Thursday') return 'quinta';
    else if(day === 'Friday') return 'sexta';
    else if(day === 'Saturday') return 'sabado';
    else if(day === 'Sunday') return 'domingo';
    else if(day === 'Monday') return 'segunda';
    else if(day === 'Tuesday') return 'terca';
    else if(day === 'Wednesday') return 'quarta';

    return '';
  }

}
