import React from "react";
import { useEffect } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { useProductContext } from "./context/productcontext";
import { TbTruckDelivery } from "react-icons/tb";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import ColorFilter from "./components/ColorFilter";
import Quantity from "./components/Quantity";
import { useCartContext } from "./context/CartContext";

const API = "https://api.pujakaitem.com/api/products";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 15rem 30rem;
  .price {
    font-weight: 550;
  }
`;
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 7rem;
  height: 53rem;
`;

const MultiImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-right: 2rem;
`;
const Image = styled.img`
  height: 10rem;
  width: 20rem;
  background-color: white;
  object-fit: cover;
  margin-bottom: 2rem;
`;
const MainImageContainer = styled.div`
  height: 20rem;
  width: 35rem;
  background-color: white;
`;
const MainImage = styled.img`
  height: 100%;
  width: 100%;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex: 1;
  height: 65rem;
`;
const FirstDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  hr {
    background-color: black;
    border: 0.5px solid black;
  }
`;

const Name = styled.h3`
  font-weight: bold;
`;
const Rating = styled.div`
  color: lightblue;
`;
const Text = styled.p``;
const Description = styled.p``;
const ServiceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Service = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: lightblue;
  padding: 1rem 1rem;
  border-radius: 5px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Button = styled.button`
  width: 15rem;
  text-align: center;
  padding: 1rem 0;
  margin-top: 1rem;
  background-color: lightgreen;
  color: white;
  outline: none;
  border: none;
`;

const SingleProduct = () => {
  const location = useLocation();
  const { cartData } = useCartContext();
  const data = location.state;
  const [currentImage, setCurrentImage] = useState(data);
  const [ color, setColor] = useState('');
  const [ ammount, setAmmount] = useState('')
  const { id } = useParams();
  const { getSingleProducts, isSingleLoading, singleProduct } =
    useProductContext();
  const { image } = singleProduct;

  useEffect(() => {
    getSingleProducts(`${API}?id=${id}`);
  }, []);
  // let ammount
  const getColor = (data) =>{
    setColor(data);
  }
  const getAmmount = (value) =>{
    setAmmount(value);
  }
  
  // console.log(color);
  return (
    <Wrapper>
      <ImageContainer>
        <MultiImagesContainer>
          {image?.map((data) => {
            return (
              <Image
                src={data.url}
                onClick={() => setCurrentImage(data.url)}
              ></Image>
            );
          })}
        </MultiImagesContainer>
        <MainImageContainer>
          <MainImage src={currentImage}></MainImage>
        </MainImageContainer>
      </ImageContainer>
      <DetailsContainer>
        <FirstDetailContainer>
          <Name>{singleProduct.name}</Name>
          <Rating>
            <ReactStars value={singleProduct.stars} size="25" isHalf="true" />
          </Rating>
          <Text className="price">{`MRP. ${singleProduct.price} RS/-`}</Text>
          <Description>{singleProduct.description}</Description>
          <ServiceContainer>
            <Service>
              <TbTruckDelivery></TbTruckDelivery> <Text>Free Delivery</Text>
            </Service>
            <Service>
              <TbTruckDelivery></TbTruckDelivery> <Text>In Stock</Text>
            </Service>
            <Service>
              <TbTruckDelivery></TbTruckDelivery> <Text>Secure Payment</Text>
            </Service>
            <Service>
              <TbTruckDelivery></TbTruckDelivery> <Text>Details</Text>
            </Service>
          </ServiceContainer>
          <Text>
            {singleProduct.stock !== 0
              ? `Available: In Stock`
              : `Available: Not In Stock`}
          </Text>
          <Text>{`ID: ${singleProduct.id}`}</Text>
          <Text>{`Brand: ${singleProduct.company}`}</Text>
          <hr />
          <FilterContainer>
            <ColorFilter product={singleProduct} getColor={getColor} />
            <Quantity product = {singleProduct} getAmmount={getAmmount}/>
            <NavLink to='/cart' onClick={ ()=> cartData(color,ammount,singleProduct) }>
            <Button>ADD TO CART</Button>
            </NavLink>
          </FilterContainer>
        </FirstDetailContainer>
      </DetailsContainer>
    </Wrapper>
  );
};

export default SingleProduct;
