import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../context";

const HistoryContainer = styled.section`
  margin-top: 2rem;
`;

const Underline = styled.div`
  width: 100%;
  height: 1px;
  background: gray;
  margin-bottom: 1rem;
`;

const ResultContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr auto;
  align-items: center;
  gap: 1rem;
  transition: 0.4s all linear;
  margin-bottom: 1rem;

  &:hover .show {
    display: block;
    transition: 0.4s all ease-in-out;
  }
`;

const Result = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 2px 3px rgba(0, 0, 0, 0.2);
  border-right: ${({ c }) => (c > 0 ? "4px solid green" : "4px solid red")};
  padding: 0 1rem;
`;

const Icon = styled(FaTimes)`
  font-size: 2rem;
  color: red;
  cursor: pointer;
  display: none;
  transition: 0.4s all linear;
`;

const History = () => {
  const { transactions, removeTransaction } = useGlobalContext();
  return (
    <HistoryContainer>
      <h3>History</h3>
      <Underline />
      {transactions.map((item) => {
        return (
          <ResultContainer key={item.id}>
            <Result c={item.amount}>
              <h3>{item.name}</h3>
              <h3>{item.amount} $</h3>
            </Result>
            <Icon className="show" onClick={() => removeTransaction(item.id)} />
          </ResultContainer>
        );
      })}
    </HistoryContainer>
  );
};

export default History;
