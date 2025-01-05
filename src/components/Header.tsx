import React, { useContext } from "react";
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

const Header = () => {
  const headerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const { state } = useContext<context>(expenseContext);
  return (
    <div>
      <div style={headerStyle}>
        <h1>Expense Tracker</h1>
        <h1>Total Expense : {state.totalAmount}</h1>
      </div>
    </div>
  );
};

export default Header;
