import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50vh;
  position: relative;
`;
const InfoContainer = styled.div`
  flex: 0.9;
  height: 20rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 55%;
  margin-top: 50px;
  margin-right: 4rem;

`;
const Text = styled.p`
  color: lightgreen;
  margin-bottom: -2rem;
`;
const Title = styled.h1``;
const Desc = styled.p`
  margin-bottom: -1rem;
  color: gray;
`;
const Button = styled.button`
  width: 130px;
  padding: 10px 0;
  text-align: center;
  background-color: lightgreen;
  outline: none;
  border: none;
  color: white;
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 85%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

const ImgDiv = styled.div`
  height: 200px;
  width: 250px;
  background-color: lightgreen;
  position: absolute;
  top: 0;
`;
const Image = styled.img`
  height: 90%;
  width: 90%;
  position: absolute;
  top: 4rem;
  right: 4rem;
  object-fit: cover;
`;

const HeroSection = ({myData}) => {
  return (
    <Wrapper>
      <InfoContainer>
        <Text>WELCOME TO</Text>
        <Title>{myData}</Title>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloremque
          illo ullam impedit quam sequi et hic optio natus odit.
        </Desc>
        <Button>SHOP NOW</Button>
      </InfoContainer>
      <ImageContainer>
        <ImgDiv></ImgDiv>
        <Image src="images/hero.jpg"></Image>
      </ImageContainer>
    </Wrapper>
  );
};

export default HeroSection;
