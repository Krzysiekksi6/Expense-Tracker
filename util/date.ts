/*eslint-disable*/
export function getFormattedDate(date: Date):string {
  return date.getMonth() + 1 < 10
    ? `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`
    : `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export const getDateMinusDays = (date: Date, days: number):Date => {
  
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}