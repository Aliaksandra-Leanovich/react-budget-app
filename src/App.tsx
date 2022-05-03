import styled from "styled-components";
import { StyledTitle } from "./components/Title/style";
import CustomSelect from "./components/CustomSelect/CustomSelect";
import Card from "./components/Card/Card";
import CardButton from "./components/CardButton/CardButton";
import SearchInput from "./components/SearchInput/SearchInput";
import ContainerForm from "./components/AddForm/AddForm";
import List from "./components/List/List";
import { ChangeEvent, useEffect, useState } from "react";
import { useExpensesContext } from "./context/ExpensesContext/ExpensesContext";
import { IExpenses } from "./context/ExpensesContext/types";
import CardInput from "./components/CardInput/CardInput";
import SaveButton from "./components/SaveButton/SaveButton";
import { useBudgetContext } from "./context/BudgetContext/BudgetContext";
import { useCurrenciesContext } from "./context/CurrencyContext/CurrencyContext";

const App = () => {
  const { expenses } = useExpensesContext();

  const [filteredExpenses, setFilteredExpenses] =
    useState<IExpenses[]>(expenses);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setFilteredExpenses(
      expenses.filter((expense) =>
        expense.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    const filteredExpenses = expenses;
    setFilteredExpenses(
      filteredExpenses.filter((expense) =>
        expense.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [expenses, searchValue]);

  const { currencies } = useCurrenciesContext();

  const { budget, setBudget } = useBudgetContext();
  const [spent, setSpent] = useState<number>(0);
  const [remaining, setRemaining] = useState<number>(0);

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleEditButton = () => {
    setIsEdit(!isEdit);
  };

  const [inputValue, setInputValue] = useState<number>(0);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(+e.target.value);
  };

  const handleSaveButton = () => {
    setIsEdit(!isEdit);
    setBudget(inputValue);
  };
  const [overspent, setOverspent] = useState<number>(0);

  useEffect(() => {
    const sum = expenses.reduce((acc, expense) => acc + expense.cost, 0);
    setSpent(sum);
    setRemaining(budget - sum);

    if (sum > budget) {
      setOverspent(sum - budget);
    }
  }, [budget, expenses]);

  const [type, setType] = useState<string>("remaining");

  useEffect(() => {
    if (spent > budget) {
      setType("overspending");
    } else {
      setType("remaining");
    }
  }, [spent, budget]);

  return (
    <StyledApp>
      <Container>
        <Header>
          <StyledTitle>Budget App </StyledTitle>
          <CustomSelect />
        </Header>
        <CardContainer>
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
        </CardContainer>
      </Container>
      <Container>
        <StyledTitle>Expenses</StyledTitle>
        <SearchInput searchValue={searchValue} handleSearch={handleSearch} />
        <List filteredExpenses={filteredExpenses} />
      </Container>
      <Container>
        <StyledTitle>Add Expenses</StyledTitle>
        <ContainerForm />
      </Container>
    </StyledApp>
  );
};

export default App;

const StyledApp = styled.div`
  display: grid;
  gap: 30px;

  background-color: rgb(255, 255, 255);
`;

const Container = styled.div`
  max-width: 335px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  display: grid;
  gap: 30px;
`;

const Header = styled.div`
  max-width: 456px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardContainer = styled.div`
  display: grid;
  gap: 20px;
`;
