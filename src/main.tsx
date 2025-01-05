import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ExpenseContextprovider } from "./context/expenseContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ExpenseContextprovider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ExpenseContextprovider>
  </StrictMode>
);
