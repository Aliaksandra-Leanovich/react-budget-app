import { useForm, SubmitHandler } from "react-hook-form";
import AddButton from "../AddButton/AddButton";
import { StyledForm, StyledInput } from "./style";
import { useExpensesContext } from "../../contex/ExpensesContext/ExpensesContext";
import { v4 as uuidv4 } from "uuid";

type FormValues = {
  name: string;
  cost: string;
};

const AddForm = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const { expenses, setExpenses } = useExpensesContext();

  const onSubmit: SubmitHandler<FormValues> = (expense) => {
    setExpenses([
      ...expenses,
      { id: uuidv4(), name: expense.name, cost: +expense.cost },
    ]);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        placeholder="enter name..."
        {...register("name", {
          required: true,
          maxLength: 15,
          // pattern: /^a-zA-Z/,
        })}
      />
      <StyledInput
        placeholder="enter cost..."
        {...register("cost", {
          required: true,
          maxLength: 5,
          pattern: /^[0-9]+$/,
        })}
      />
      <AddButton>Done</AddButton>
    </StyledForm>
  );
};
export default AddForm;
