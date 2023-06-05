export interface Expense {
  id?: string | number;
  description: string;
  amount: number | string;
  date: Date | string;
}