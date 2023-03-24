import React, { useState } from "react";
import styled from "styled-components";
import { BiCheck } from "react-icons/bi";
import { useProductContext } from "../context/productcontext";

const Text = styled.p``;

const ColorContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ColorSpan = styled.button`
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
  border: 1px solid black;
  margin-left: 1rem;
  background-color: ${(props) => props.color || "#fff"};
`;

const ColorFilter = ({ product, getColor }) => {
  const { colors } = product;
  const [curColor, setCurColor] = useState(product?.colors);
  const handleClick = (data,e) =>{
    let selectedColor = e.target.getAttribute('color');
    setCurColor(data);
    getColor(selectedColor);
  }
  return (
    <ColorContainer>
      <Text>
        Color:
        {colors?.map((color) => {
          return (
            <ColorSpan color={color} onClick={(e)=> handleClick(color,e)} >
              {curColor === color ? <BiCheck color="white" /> : null}
            </ColorSpan>
          );
        })}
      </Text>
    </ColorContainer>
  );
};

export default ColorFilter;
