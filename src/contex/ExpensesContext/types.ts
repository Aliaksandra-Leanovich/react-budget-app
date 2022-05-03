import { ReactNode } from "react";

export interface IExpensesContextProviderProps {
  children: ReactNode;
}

export interface IExpensesContext {
  expenses: IExpenses[];
  setExpenses: (newExpenses: IExpenses[]) => void;
  deleteExpense: (id: string) => void;
}

export interface IExpenses {
  id: string;
  name: string;
  cost: number;
}
