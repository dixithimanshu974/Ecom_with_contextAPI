import React from "react";
import styled from "styled-components";
import { useCartContext } from "./context/CartContext";
import { AiFillDelete } from "react-icons/ai";
import Quantity from "./components/Quantity";
import { useProductContext } from "./context/productcontext";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 8rem;
`;
const CartContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 60vh;
  width: 60vw;
  flex-direction: column;
  align-items: center;
`;
const Text = styled.p`
  text-transform: uppercase;
`;
const ProductData = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    border: none;
  }

  td,
  th {
    text-align: left;
    padding: 28px 55px;
    font-size: 1.4rem;
  }

  td {
    font-size: 14px;
    font-family: sans-serif;
    
  }
  tr:nth-child(even) {
    background-color: #F5FCFF;
  }
  
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 5vh;
`;
const Image = styled.img`
  height: 4rem;
  width: 6rem;
  margin-right: 2rem;
`;

const ColorSpan = styled.button`
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
  border: 1px solid black;
  background-color: ${(props) => props.color };
`;

const DetailsContainer = styled.div`
display: flex;
flex-direction: column;
`
const Cart = () => {
  const { cart, deleteItem } = useCartContext();
  const { singleProduct } = useProductContext();
  const getAmmount = (value) =>{
  }
  
  return (
    <Wrapper>
      <CartContainer>
        <ProductData>
          <table>
            <tr>
              <th>ITEM</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>SUBTOTAL</th>
              <th>ICON</th>
            </tr>
            {cart?.map((data) => {
              return (
                <tr>
                  <td>
                    <ItemContainer>
                      <Image src={data.image?.url}></Image>
                      <DetailsContainer>
                      <Text>{data.name}</Text>
                      <ColorSpan color={data.color}></ColorSpan>
                      </DetailsContainer>
                    </ItemContainer>
                  </td>
                  <td>{data.price}₹</td>
                  <td className="quantity">{<Quantity product={singleProduct} getAmmount={getAmmount}/>}</td>
                  <td>{data.price * data.ammount}₹</td>
                  <td>{<AiFillDelete color="red" fontSize="2rem" onClick={(e)=> deleteItem(data.id,e)} />}</td>
                </tr>
              );
            })}
          </table>
        </ProductData>
      </CartContainer>
    </Wrapper>
  );
};

export default Cart;
