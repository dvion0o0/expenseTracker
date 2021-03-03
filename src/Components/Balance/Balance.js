import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context";
const BalanceContainer = styled.div`
  margin-top: 7rem;

  h2 {
    margin-bottom: 1.2rem;
  }

  h1 {
    color: orange;
  }
`;

const BalanceCard = styled.article`
  display: grid;
  padding: 1rem;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: #fff;
  box-shadow: 0 3px 3px 4px rgba(0, 0, 0, 0.1);
`;

const Income = styled.div`
  padding: 0 2rem;
  border-right: 2px solid gray;

  h2 {
    color: green;
  }
`;

const Expense = styled.div`
  padding: 0 2rem;
  h2 {
    color: red;
  }
`;

const Balance = () => {
  const { Inc, Exp, Balance } = useGlobalContext();
  return (
    <BalanceContainer>
      <h3>Your Balance</h3>
      <h1>{Balance} $</h1>
      <BalanceCard>
        <Income>
          <h3>INCOME</h3>
          <h2>{Inc} $</h2>
        </Income>
        <Expense>
          <h3>EXPENSE</h3>
          <h2>{Exp} $</h2>
        </Expense>
      </BalanceCard>
    </BalanceContainer>
  );
};

export default Balance;
