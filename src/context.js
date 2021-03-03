import React, { createContext, useContext, useState, useEffect } from "react";
import { v4 as UUIDv4 } from "uuid";

const AppContext = createContext();

const getLocalStorage = () => {
  let history = localStorage.getItem("transaction");
  if (history) {
    return (history = JSON.parse(localStorage.getItem("transaction")));
  } else {
    return [];
  }
};

const AppProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();
  const [errorText, setErrorText] = useState(false);
  const [errorAmount, setErrorAmount] = useState(false);
  const [transactions, setTransactions] = useState(getLocalStorage());

  const addTransaction = (e) => {
    e.preventDefault();
    if (!text && !amount) {
      setErrorText(true);
      setErrorAmount(false);
    } else if (!text) {
      setErrorText(true);
      setErrorAmount(false);
    } else if (!amount) {
      setErrorText(false);
      setErrorAmount(true);
    } else {
      setErrorAmount(false);
      setErrorText(false);
      setTransactions([
        ...transactions,
        {
          id: UUIDv4(),
          name: text,
          amount: amount,
        },
      ]);
      setText("");
      setAmount("");
    }
  };

  console.log(transactions);

  const Inc = transactions
    .filter((item) => item.amount > 0)
    .reduce((total, item) => {
      const num = parseFloat(item.amount);
      return total + num;
    }, 0)
    .toFixed(2);

  const Exp = transactions
    .filter((item) => item.amount < 0)
    .reduce((total, item) => {
      const num = parseFloat(item.amount);
      return total + num;
    }, 0)
    .toFixed(2);

  const Balance = (parseFloat(Inc) + parseFloat(Exp)).toFixed(2);

  const removeTransaction = (id) => {
    const newTransaction = transactions.filter((item) => item.id !== id);
    setTransactions(newTransaction);
  };

  useEffect(() => {
    localStorage.setItem("transaction", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <AppContext.Provider
      value={{
        errorText,
        errorAmount,
        text,
        setText,
        amount,
        setAmount,
        addTransaction,
        transactions,
        Inc,
        Exp,
        Balance,
        removeTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
