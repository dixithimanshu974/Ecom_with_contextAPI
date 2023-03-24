import React from "react";
import styled from "styled-components";
import {TbTruckDelivery} from "react-icons/tb"
import {BsShieldCheck} from "react-icons/bs"
import {RiSecurePaymentLine} from "react-icons/ri"
import {FaMoneyCheckAlt} from "react-icons/fa"

const Wrapper = styled.div`
  display: flex;
  height: 35vh;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .icon{
    color: green;
    height: 30px;
    width: 30px;
    margin-bottom: 3rem;
  }
  .iconl{
    color: green;
    height: 30px;
    width: 30px;
    margin-right: 3rem;
  }
`;
const FastDelivery = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  height: 200px;
  width: 250px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  width: 350px;
`;
const ContactShipping = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  height: 80px;
  width: 280px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MoneyBack = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  height: 80px;
  width: 280px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SecurePayment = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  height: 200px;
  width: 250px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.p`
font-weight: 300;
`

const Services = () => {
  return (
    <Wrapper>
      <FastDelivery>
        <TbTruckDelivery className="icon"/>
        <Text>Super Fast Delivery</Text>
      </FastDelivery>
      <FlexDiv>
        <ContactShipping>
            <BsShieldCheck className="iconl"/>
        <Text>Non-Contact Delivery</Text>
        </ContactShipping>
        <MoneyBack>
            <FaMoneyCheckAlt className="iconl"/>
        <Text>Money Back Guranteed</Text>
        </MoneyBack>
      </FlexDiv>
      <SecurePayment>
        <RiSecurePaymentLine className="icon"/>
      <Text>Super Secure System</Text>
      </SecurePayment>
    </Wrapper>
  );
};

export default Services;
