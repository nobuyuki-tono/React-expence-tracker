import React from "react";

import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomExoences from "./components/IncomeExpences";
import TransactionList from "./components/TransactionList";
import Addtransaction from "./components/AddTransaction";

import { GrobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomExoences />
        <TransactionList />
        <Addtransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
