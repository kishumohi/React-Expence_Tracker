import React from "react";
import Header from "./components/Header/Header.jsx";
import Balance from "./components/Balance/Balance.jsx";
import IncomeExpenses from "./components/IncomeExpenses/IncomeExpenses.jsx";
import TransactionList from "./components/TransactionList/TransactionList.jsx";
import AddTransaction from "./components/AddTransaction/AddTransaction.jsx";
import { GlobalProvider } from "./context/GlobalState.jsx";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
