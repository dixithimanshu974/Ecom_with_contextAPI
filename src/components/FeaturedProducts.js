import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useProductContext } from "../context/productcontext";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const Wrapper = styled.div`
  padding-left: 50rem;
  padding-right: 50rem;
`;
const TextContainer = styled.div``;
const Text = styled.p``;
const Heading = styled.h2`
  font-weight: 400;
  margin-bottom: 5rem;
`;
const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25rem;
  width: 85rem;
`;
const ImageContainer = styled.div`
  height: 22rem;
  width: 25rem;
  background-color: white;
  display: flex;
  align-items: center;
  background-color: white;
  flex-direction: column;
`;
const Image = styled.img`
  height: 20rem;
  width: 23rem;
`;
const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right:1rem;
  padding-left:1rem;
`;
const Name = styled.p``;
const Price = styled.p`
  color: green;
`;

const FeaturedProducts = () => {
  const { isLoading, featureProducts } = useProductContext();

  return (
    <>
      <Container>
        <Wrapper>
          <TextContainer>
            <Text>Check Now</Text>
            <Heading>Our Feature Services</Heading>
          </TextContainer>
          <ProductsContainer>
            {featureProducts.map((value) => {
              return (
                <>
                  <ImageContainer>
                    <NavLink to={`/singleproduct/${value.id}`} state={value.image}>
                    <Image src={value.image}></Image>
                    </NavLink>
                    <DetailsContainer>
                      <Name>{value.name}</Name>
                      <Price>`₹{value.price}`</Price>
                    </DetailsContainer>
                  </ImageContainer>
                </>
              );
            })}
          </ProductsContainer>
        </Wrapper>
      </Container>
    </>
  );
};

export default FeaturedProducts;
