import styled from "styled-components";
import { StyledTitle } from "./components/Title/style";
import CustomSelect from "./components/CustomSelect/CustomSelect";
import SearchInput from "./components/SearchInput/SearchInput";
import ContainerForm from "./components/AddForm/AddForm";
import List from "./components/List/List";
import { ChangeEvent, useEffect, useState } from "react";
import { useExpensesContext } from "./contex/ExpensesContext/ExpensesContext";
import { IExpenses } from "./contex/ExpensesContext/types";
import CardContainer from "./components/CardContainer/CardContainer";

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

  return (
    <StyledApp>
      <Container>
        <Header>
          <StyledTitle>Budget App </StyledTitle>
          <CustomSelect />
        </Header>
        <CardContainer />
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
