import React, { useContext, useState } from "react";
import Input from "./ui/Input";
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

const AddExpense = () => {
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  const { dispatch } = useContext<context>(expenseContext);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const expense: Expense = {
      title,
      amount,
      date: new Date(),
      id: Math.round(Math.random()),
    };

    dispatch({ type: "ADD", payload: expense });
    alert("Expense added successfully");
    setTitle("");
    setAmount(0);
  };

  const formInputData = [
    {
      type: "text",
      placeholder: "Title",
      value: title,
      label: "Enter a Title",
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
      },
    },
    {
      type: "number",
      placeholder: "Amount",
      value: amount,
      label: "Enter the Amount Sent",
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(event.target.valueAsNumber);
      },
    },
  ];

  return (
    <div>
      <form onSubmit={submitHandler}>
        {formInputData.map((inputData) => (
          <Input
            key={inputData.label}
            type={inputData.type}
            label={inputData.label}
            value={inputData.value}
            onChange={inputData.onChange}
            placeholder={inputData.placeholder}
          />
        ))}

        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpense;
