import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState.jsx";
import Transaction from "./Transaction.jsx";

function TransactionList() {
  const { transaction } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transaction.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
