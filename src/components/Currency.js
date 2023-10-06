import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import './currency.css';

const Currency = () => {
  const { dispatch } = useContext(AppContext);
  const handleChange = (e) => {
    dispatch({
        type: "CHG_CURRENCY",
        payload: e.target.value,
      });
  }
  return (
    <div className="custom-select">
      <select
        className="currency-select"
        id="currencySelect"
        onChange={handleChange}
      >
        <option value="£">(£) Pound</option>
        <option value="₹">(₹) Ruppee</option>
        <option value="€">(€) Euro</option>
        <option value="$">($) Dollar</option>
      </select>
    </div>
  );
};

export default Currency;
