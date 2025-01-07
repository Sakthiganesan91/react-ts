import { MouseEventHandler, useContext, useState } from "react";
import AddExpense from "../components/AddExpense";
import { expenseContext } from "../context/expenseContext";
import Card from "../components/ui/Card";

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

const Home = () => {
  const [showTab, setShowTab] = useState<boolean>(false);

  const { state } = useContext<context>(expenseContext);

  const showExpenseAddTab = (): void => setShowTab(!showTab);

  const closeTab = (): void => setShowTab(false);
  return (
    <div>
      <button onClick={showExpenseAddTab}>Add Expense +</button>

      {showTab && <AddExpense closeTab={closeTab} />}

      {state.expenses.map((expense) => {
        return (
          <Card
            amount={expense.amount}
            date={expense.date}
            id={expense.id}
            title={expense.title}
            key={expense.id}
          />
        );
      })}
    </div>
  );
};

export default Home;
