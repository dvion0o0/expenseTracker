import React from "react";
import styled from "styled-components";
import { TextField, Button } from "@material-ui/core/";
import { useGlobalContext } from "../../context";

const TransactionContainer = styled.section`
  margin-top: 3rem;
`;

const Underline = styled.div`
  width: 100%;
  height: 1px;
  background: gray;
  margin-bottom: 2rem;
`;

const Transaction = () => {
  const {
    errorText,
    errorAmount,
    text,
    amount,
    setText,
    setAmount,
    addTransaction,
  } = useGlobalContext();

  return (
    <TransactionContainer>
      <h3>Add New Transaction</h3>
      <Underline />
      <TextField
        required
        label="Text"
        style={{ width: "100%", fontSize: "1rem" }}
        variant="outlined"
        error={errorText}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <TextField
        required
        label="Amount"
        style={{
          width: "100%",
          fontSize: "1rem",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
        type="number"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        error={errorAmount}
        helperText={errorAmount ? "Invalid Number" : null}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{ width: "100%", padding: "1.4rem 0" }}
        onClick={addTransaction}
      >
        Add Transaction
      </Button>
    </TransactionContainer>
  );
};

export default Transaction;
