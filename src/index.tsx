import React from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyles } from "./GlobalStyles";
import App from "./App";
import { ExpensesContextProvider } from "./context/ExpensesContext/ExpensesContext";
import { CurrenciesContextProvider } from "./context/CurrencyContext/CurrencyContext";
import { BudgetContextProvider } from "./context/BudgetContext/BudgetContext";

const rootElement = document.getElementById("root") as HTMLElement;
if (!rootElement) {
  throw new Error("Root element not found");
}
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BudgetContextProvider>
      <CurrenciesContextProvider>
        <ExpensesContextProvider>
          <GlobalStyles />
          <App />
        </ExpensesContextProvider>
      </CurrenciesContextProvider>
    </BudgetContextProvider>
  </React.StrictMode>
);
