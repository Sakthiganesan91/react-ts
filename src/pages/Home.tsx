import { useContext, useState } from "react";
import AddExpense from "../components/AddExpense";
import { expenseContext } from "../context/expenseContext";

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
  | { type: "DELETE" };

interface context {
  state: defaultValues;
  dispatch: React.Dispatch<Action>;
}

const Home = () => {
  const [showTab, setShowTab] = useState<boolean>(false);

  const { state } = useContext<context>(expenseContext);

  const showExpenseAddTab = (): void => setShowTab(!showTab);
  return (
    <div>
      <button onClick={showExpenseAddTab}>Add Expense +</button>

      <AddExpense />

      {state.expenses.map((expense) => {
        return (
          <div key={expense.id}>
            <p>{expense.title}</p>
            <p>{expense.amount}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
