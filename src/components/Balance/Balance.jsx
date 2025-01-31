import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState.jsx";

function Balance() {
  const { transaction } = useContext(GlobalContext);
  const amounts = transaction.map((transaction) => transaction.amount);
  //   console.log(amounts);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  //   console.log(total);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">{total}</h1>
    </div>
  );
}

export default Balance;
