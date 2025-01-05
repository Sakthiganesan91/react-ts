import React, { createContext, useReducer } from "react";

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

const expenseDefaultValues: defaultValues = {
  totalAmount: 0,
  expenses: [],
};

interface context {
  state: defaultValues;
  dispatch: React.Dispatch<Action>;
}
export const expenseContext = createContext<context>({
  state: expenseDefaultValues,
  dispatch: () => {},
});

export const authReducer = (
  state: defaultValues,
  action: Action
): defaultValues => {
  switch (action.type) {
    case "ADD":
      console.log(state, action);
      return {
        totalAmount: action.payload.amount + state.totalAmount,
        expenses: [...state.expenses, action.payload],
      };

    default:
      return state;
  }
};

interface reactChildrenProp {
  children: React.ReactNode;
}

export const ExpenseContextprovider = ({ children }: reactChildrenProp) => {
  const [state, dispatch] = useReducer(authReducer, expenseDefaultValues);

  return (
    <expenseContext.Provider value={{ state, dispatch }}>
      {children}
    </expenseContext.Provider>
  );
};
