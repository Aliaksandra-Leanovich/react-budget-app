import { ChangeEvent, useEffect, useState } from "react";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { IExpenses } from "../../context/ExpensesContext/types";
import ListItem from "../ListItem/ListItem";
import SearchInput from "../SearchInput/SearchInput";
import { StyledEmpty, StyledList } from "./style";

const List = () => {
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
    setFilteredExpenses(
      expenses.filter((expense) =>
        expense.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [expenses, searchValue]);

  return (
    <StyledList>
      <SearchInput searchValue={searchValue} handleSearch={handleSearch} />
      {filteredExpenses.length > 0 ? (
        filteredExpenses.map((expense) => {
          return <ListItem key={expense.id} expense={expense}></ListItem>;
        })
      ) : (
        <StyledEmpty>Oooops 🙈</StyledEmpty>
      )}
    </StyledList>
  );
};

export default List;
