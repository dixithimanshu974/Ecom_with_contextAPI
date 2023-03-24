import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const QuantityContainer = styled.div`
  display: flex;
  height: 5rem;
  width: 30%;
  align-items: center;
  justify-content: space-between;

  .qatext {
    color: green;
    font-size: 2.5rem;
    padding: 0rem 2rem;
  }
`;
const Span = styled.button`
  background-color: transparent;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  background-color: gray;
  text-align: center;
  font-size: 3rem;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p``;

const Quantity = ({product, getAmmount}) => {
  const [value, setValue] = useState(1);
  const {stock} = product;
  getAmmount(value);

  const decrease = () =>{
    value > 1 ? setValue(value - 1) : setValue(1);
  }
  const increase = () =>{
    value < stock ? setValue(value + 1) : setValue(stock);
  }
  return (
    <QuantityContainer>
      <Span onClick={ decrease }>-</Span>
      <Text className="qatext">{value}</Text>
      <Span onClick={ increase }>+</Span>
    </QuantityContainer>
  );
};

export default Quantity;
