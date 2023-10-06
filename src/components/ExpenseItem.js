import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
import increaseButton from '../increase.svg';
import decreaseButton from '../decrease.svg';
import "./expenseItem.css";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };
  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };
    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <img className="expense expense-increase" src={increaseButton} alt="increase button" onClick={(event) => increaseAllocation(props.name)} />
      </td>
      <td>
      <img className="expense expense-decrease" src={decreaseButton} alt="decrease button" onClick={(event) => decreaseAllocation(props.name)} />
      </td>
      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;
