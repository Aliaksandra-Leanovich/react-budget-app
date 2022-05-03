import { useState } from "react";
import Select, { StylesConfig } from "react-select";
import { IOption } from "../../types";
import { Currency } from "../../config/Currency";
import { useCurrenciesContext } from "../../contex/CurrencyContext/CurrencyContext";

const CustomSelect = () => {
  const options: IOption[] = [
    { value: Currency.USD, label: "USD" },
    { value: Currency.EUR, label: "EUR" },
    { value: Currency.GBR, label: "GBR" },
  ];
  const { setCurrencies } = useCurrenciesContext();

  const [selectCurrency, setSelectCurrency] = useState<IOption>();

  const handleSelect = (option: IOption | null) => {
    if (option) {
      setSelectCurrency(option);
      setCurrencies(option.value);
    }
  };

  return (
    <Select
      options={options}
      isMulti={false}
      defaultValue={options[0]}
      value={selectCurrency}
      onChange={handleSelect}
    />
  );
};

export default CustomSelect;
