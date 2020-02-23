import React from "react";

import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactiions } = useContext(GlobalContext);

  const amounts = transaction.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, amount) => (acc += amount), 0).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>$${total}</h1>
    </>
  );
};

export default Balance;
