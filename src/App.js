import React from "react";

import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomExoences from "./components/IncomeExpences";
import TransactionList from "./components/TransactionList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance />
        <IncomExoences />
        <TransactionList />
      </div>
    </div>
  );
}

export default App;
