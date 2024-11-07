import { Injectable } from '@angular/core';
import { format } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {
  private holidays: { [state: string]: { [date: string]: string } } = {
    'nacional': {
      '01-01': 'Confraternização Universal',
      '04-21': 'Tiradentes',
      '05-01': 'Dia do Trabalho',
      '09-07': 'Independência do Brasil',
      '10-12': 'Nossa Senhora Aparecida',
      '11-02': 'Finados',
      '11-15': 'Proclamação da República',
      '12-25': 'Natal'
    },
    'ac': { '01-23': 'Dia do Evangélico' },
    'al': { '06-24': 'São João', '06-29': 'São Pedro', '09-16': 'Emancipação Política' },
    'ap': { '03-19': 'Dia de São José' },
    'am': { '09-05': 'Elevação do Amazonas à categoria de província', '12-08': 'Nossa Senhora da Conceição' },
    'ba': { '07-02': 'Independência da Bahia' },
    'ce': { '03-19': 'Dia de São José', '03-25': 'Data Magna do Ceará' },
    'df': { '04-21': 'Aniversário de Brasília', '11-30': 'Dia do Evangélico' },
    'es': { '10-28': 'Dia do Servidor Público' },
    'go': { '10-28': 'Dia do Servidor Público' },
    'ma': { '07-28': 'Adesão do Maranhão à Independência do Brasil' },
    'mt': { '11-20': 'Dia da Consciência Negra' },
    'ms': { '10-11': 'Criação do Estado de Mato Grosso do Sul' },
    'mg': { '04-21': 'Dia de Tiradentes' },
    'pa': { '08-15': 'Adesão do Grão-Pará à Independência do Brasil' },
    'pb': { '08-05': 'Fundação da Paraíba' },
    'pr': { '12-19': 'Emancipação Política do Paraná' },
    'pe': { '06-24': 'São João' },
    'pi': { '03-13': 'Dia da Batalha do Jenipapo', '10-19': 'Dia do Piauí' },
    'rj': { '01-20': 'São Sebastião', '04-23': 'Dia de São Jorge', '11-20': 'Dia da Consciência Negra' },
    'rn': { '06-29': 'Dia de São Pedro', '10-03': 'Mártires de Cunhaú e Uruaçu' },
    'rs': { '09-20': 'Revolução Farroupilha' },
    'ro': { '01-04': 'Criação do Estado de Rondônia' },
    'rr': { '10-05': 'Criação de Roraima' },
    'sc': { '08-11': 'Criação da capitania, separação de São Paulo' },
    'sp': { '07-09': 'Revolução Constitucionalista' },
    'se': { '07-08': 'Emancipação Política de Sergipe' },
    'to': { '10-05': 'Criação do Estado de Tocantins' }
  };

  constructor() {}

  // Verifica se uma data é feriado em um estado específico
  isHoliday(date: Date, state: string): string | null {
    const formattedDate = format(date, 'MM-dd');

    return this.holidays['nacional'][formattedDate] || this.holidays[state]?.[formattedDate] || null;
  }
}
