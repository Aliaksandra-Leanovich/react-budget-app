import React, { createContext, useContext, useState } from "react";
import { Currency } from "../../config/Currency";

import { ICurrencyContext, ICurrencysContextProviderProps } from "./types";

const CurrencyContext = createContext<ICurrencyContext>({
  currencies: Currency.USD,
  setCurrencies: () => {},
});

const useCurrenciesContextValue = () => {
  const [currrenciesContext, setCurrenciesContext] = useState<ICurrencyContext>(
    () => ({
      currencies: Currency.USD,
      setCurrencies: (newCurrency) => {
        setCurrenciesContext((ctx) => ({ ...ctx, currencies: newCurrency }));
      },
    })
  );

  return currrenciesContext;
};

export const useCurrenciesContext = () =>
  useContext<ICurrencyContext>(CurrencyContext);

export const CurrenciesContextProvider = ({
  children,
}: ICurrencysContextProviderProps) => {
  return (
    <CurrencyContext.Provider value={useCurrenciesContextValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};
