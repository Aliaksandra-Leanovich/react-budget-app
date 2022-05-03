import { useCurrenciesContext } from "../../contex/CurrencyContext/CurrencyContext";
import { StyledBadge } from "./style";

interface ICost {
  cost: number;
}

export const Badge = ({ cost }: ICost) => {
  const { currencies } = useCurrenciesContext();
  return <StyledBadge>{`${currencies}${cost}`}</StyledBadge>;
};
