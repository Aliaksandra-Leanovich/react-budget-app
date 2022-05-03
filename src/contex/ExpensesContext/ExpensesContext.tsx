import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  IExpenses,
  IExpensesContext,
  IExpensesContextProviderProps,
} from "./types";

const ExpensesContext = createContext<IExpensesContext>({
  expenses: [],
  setExpenses: (newExpenses: IExpenses[]) => {},
  deleteExpense: (id: string) => {},
});

const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpensesContext>(
    () => ({
      expenses: [{ id: uuidv4(), name: "puppy", cost: 1000 }],

      setExpenses: (newExpenses: IExpenses[]) => {
        setExpensesContext((ctx) => ({ ...ctx, expenses: newExpenses }));
      },

      deleteExpense: (id: string) => {
        setExpensesContext((ctx) => ({
          ...ctx,
          expenses: ctx.expenses.filter((expense) => expense.id !== id),
        }));
      },
    })
  );

  return expensesContext;
};

export const useExpensesContext = () =>
  useContext<IExpensesContext>(ExpensesContext);

export const ExpensesContextProvider = ({
  children,
}: IExpensesContextProviderProps) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
