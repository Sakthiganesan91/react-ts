import { useContext } from "react";
import { expenseContext } from "../../context/expenseContext";

interface Expense {
  id: number;
  title: string;
  amount: number;
  date: Date;
}
interface defaultValues {
  totalAmount: number;
  expenses: Expense[];
}

type Action =
  | { type: "ADD"; payload: Expense }
  | { type: "EDIT"; payload: Expense }
  | { type: "DELETE"; payload: Expense };

interface context {
  state: defaultValues;
  dispatch: React.Dispatch<Action>;
}
const Card = ({ id, title, amount, date }: Expense) => {
  const { dispatch } = useContext<context>(expenseContext);
  return (
    <div id={id.toString()}>
      <h4>{title}</h4>
      <button
        onClick={() =>
          dispatch({ type: "DELETE", payload: { id, title, amount, date } })
        }
      >
        Delete
      </button>
      <p>{amount}</p>
      <p>{date.toISOString().split("T")[0]}</p>
    </div>
  );
};

export default Card;
