import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, currency, dispatch, expenses } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (e) => {
    if (e.currentTarget.value > 20000) {
      alert("The budget cannot exceed 20000");
      return;
    } else {
      const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
      }, 0);
      if (e.currentTarget.value < totalExpenses) {
        alert(`The budget must be higher than current expenses: ${currency}${totalExpenses}`);
      return;
      } else {
        dispatch({
          type: "SET_BUDGET",
          payload: e.currentTarget.value,
        });
        setNewBudget(e.currentTarget.value);
      }
    }
  };
  return (
    <div className="alert alert-secondary">
      <span>
        Budget: {currency} {budget}
      </span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
