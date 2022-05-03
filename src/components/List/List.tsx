import { IExpenses } from "../../contex/ExpensesContext/types";
import ListItem from "../ListItem/ListItem";
import { StyledEmpty, StyledList } from "./style";

interface IExpensesList {
  filteredExpenses: IExpenses[];
}

const List = ({ filteredExpenses }: IExpensesList) => {
  return (
    <StyledList>
      {filteredExpenses.length ? (
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
