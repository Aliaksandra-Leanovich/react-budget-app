import { ChangeEvent, useEffect, useState } from "react";
import { useBudgetContext } from "../../contex/BudgetContext/BudgetContext";
import { useCurrenciesContext } from "../../contex/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../contex/ExpensesContext/ExpensesContext";
import Card from "../Card/Card";
import CardButton from "../CardButton/CardButton";
import CardInput from "../CardInput/CardInput";
import SaveButton from "../SaveButton/SaveButton";
import { StyledContainer } from "./style";

const CardContainer = () => {
  const { expenses } = useExpensesContext();
  const { currencies } = useCurrenciesContext();
  const { budget, setBudget } = useBudgetContext();
  const [spent, setSpent] = useState<number>(0);
  const [remaining, setRemaining] = useState<number>(0);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<number>(0);
  const [overspent, setOverspent] = useState<number>(0);
  const [type, setType] = useState<string>("remaining");

  const handleEditButton = () => {
    setIsEdit(!isEdit);
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(+e.target.value);
  };

  const handleSaveButton = () => {
    setIsEdit(!isEdit);
    setBudget(inputValue);
  };

  useEffect(() => {
    const sum = expenses.reduce((acc, expense) => acc + expense.cost, 0);
    setSpent(sum);
    setRemaining(budget - sum);

    if (sum > budget) {
      setOverspent(sum - budget);
    }
  }, [budget, expenses]);
  useEffect(() => {
    if (spent > budget) {
      setType("overspending");
    } else {
      setType("remaining");
    }
  }, [spent, budget]);

  return (
    <StyledContainer>
      <Card isEdit type="budget">
        {isEdit ? (
          <CardInput handleInput={handleInput} />
        ) : (
          `Budget: ${currencies}${budget}`
        )}
        {isEdit ? (
          <SaveButton handleSaveButton={handleSaveButton}>Save</SaveButton>
        ) : (
          <CardButton handleEditButton={handleEditButton}>Edit</CardButton>
        )}
      </Card>
      <Card type={type}>
        {type === "remaining"
          ? `Remaining: ${currencies}${remaining}`
          : `Overspending by ${currencies}${overspent}`}
      </Card>
      <Card type="spent">
        Spent so far: {currencies}
        {spent}
      </Card>
    </StyledContainer>
  );
};

export default CardContainer;
