import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState.jsx";

function AddTransaction() {
  const { addTransaction } = useContext(GlobalContext);
  const [text, settext] = useState("");
  const [amount, setamount] = useState(0);
  const handlerSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };
  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={handlerSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            value={text}
            onChange={(e) => settext(e.target.value)}
            type="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            value={amount}
            onChange={(e) => setamount(e.target.value)}
            type="number"
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
