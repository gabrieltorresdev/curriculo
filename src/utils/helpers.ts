import moment from "moment";
import { AppContextInterface } from "../contexts/AppContext";

export function getPeriodoExperiencia(lang: AppContextInterface["language"], dataInicial: string, dataFinal?: string) {
  const periodo = moment(dataFinal).diff(dataInicial, 'months');
  const anos = Math.floor(periodo / 12);
  const meses = periodo % 12;

  if (anos > 0 && meses > 0) {
    if (lang === 'pt') {
      return `${anos} ${anos === 1 ? 'ano' : 'anos'} e ${meses} ${meses === 1 ? 'mês' : 'meses'}`;
    }

    return `${anos} ${anos === 1 ? 'year' : 'years'} and ${meses} ${meses === 1 ? 'month' : 'months'}`;
  }
  
  if (anos > 0) {
    if (lang === 'pt') {
      return `${anos} ${anos === 1 ? 'ano' : 'anos'}`;
    }

    return `${anos} ${anos === 1 ? 'year' : 'years'}`;
  }
  
  if (meses > 0) {
    if (lang === 'pt') {
      return `${meses} ${meses === 1 ? 'mês' : 'meses'}`;
    }

    return `${meses} ${meses === 1 ? 'month' : 'months'}`;
  }
    
  return lang === 'pt' ? 'Menos de 1 mês' : 'Less than a month';
};