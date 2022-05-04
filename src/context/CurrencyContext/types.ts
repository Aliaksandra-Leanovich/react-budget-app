import { ReactNode } from "react";
import { Currency } from "../../config/Currency";

export interface ICurrencysContextProviderProps {
  children: ReactNode;
}

export interface ICurrencyContext {
  currencies: Currency;
  setCurrencies: (newCurrency: Currency) => void;
}
