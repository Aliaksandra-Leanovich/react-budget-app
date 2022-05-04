import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { IExpenses } from "../../context/ExpensesContext/types";
import { Badge } from "../Badge/Badge";
import Close from "../Close/Close";
import { StyledListItem } from "./style";

interface IExpense {
  expense: IExpenses;
}

const ListItem = ({ expense }: IExpense) => {
  const { deleteExpense } = useExpensesContext();

  const handleDelete = () => {
    deleteExpense(expense.id);
  };

  return (
    <StyledListItem>
      {expense.name} <Badge cost={expense.cost} />
      <Close onClick={handleDelete} />
    </StyledListItem>
  );
};

export default ListItem;
