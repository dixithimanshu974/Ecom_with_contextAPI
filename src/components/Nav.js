import React from "react";
import styled from "styled-components";
import { BsCartCheck } from "react-icons/bs";
import { CgMenuLeftAlt, CgClose } from "react-icons/cg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useFilterContext } from "../context/FilterContext";
import { useCartContext } from "../context/CartContext";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
  padding: 0 25px;
  @media (max-width: 768px) {
    .menu {
      display: none;
    }
    .hamburger {
      display: block;
      .nav-menu-open {
        display: block;
      }
    }
    .nav-menu-close.active {
      display: flex;
      height: 30px;
      width: 30px;
      position: absolute;
      right: 0;
      top: 15px;
      margin-right: 15px;
      z-index: 901;
    }
    .iconimg.active {
      display: none;
    }
    .menu.active {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100vw;
      height: 100vh;
      flex-direction: column;
      z-index: 900;
      background-color: white;
      padding: 150px 0px;
    }
    .nav-menu-open.close {
      display: none;
      height: 100px;
    }
  }
`;
const IconContainer = styled.div`
  height: 5rem;
  width: 15rem;
`;
const Icon = styled.img`
  height: 100%;
  width: 100%;
`;
const MenuItemsContainer = styled.div`
  display: flex;
  height: 8rem;
  justify-content: space-between;
  align-items: center;
  width: 35%;
  @media (max-width: 1410px) {
    width: 45%;
  }
  @media (max-width: 1210px) {
    width: 55%;
  }
  @media (max-width: 940px) {
    width: 65%;
  }
`;
const MenuItem = styled.p`
  font-size: 400;
`;
const LoginButton = styled.button`
  padding: 10px 25px;
  border-radius: 0px;
  border: none;
  outline: none;
  background-color: lightgreen;
  color: white;
  font-size: 10px;
`;
const CartIcon = styled.div`
  .test {
    height: 30px;
    width: 30px;
  }
`;

const CartValue = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 100%;
  background-color: lightgreen;
`;

const Hamburger = styled.div`
  display: none;
  .nav-menu-open {
    display: none;
    height: 30px;
    width: 30px;
  }
  .nav-menu-close {
    display: none;
  }
`;

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const addClass = () => {
    setMenuIcon(true);
  };

  const removeClass = () => {
    setMenuIcon(false);
  };

  const { totalItems } = useCartContext()

  return (
    <Wrapper>
      <IconContainer className={menuIcon ? "iconimg active" : "iconimg"}>
        <Icon src="images/shopify.png"></Icon>
      </IconContainer>
      <MenuItemsContainer className={menuIcon ? "menu active" : "menu"}>
        <NavLink to="/">
          <MenuItem>HOME</MenuItem>
        </NavLink>
        <NavLink to="/about">
          <MenuItem>ABOUT</MenuItem>
        </NavLink>
        <NavLink to="/product">
        <MenuItem>PRODUCTS</MenuItem>
        </NavLink>
        <MenuItem>CONTACT</MenuItem>
        <LoginButton>LOGIN</LoginButton>
        <CartIcon>
          <NavLink to="/cart">
          <BsCartCheck className="test" />
          </NavLink>
          <CartValue>{totalItems}</CartValue>
        </CartIcon>
      </MenuItemsContainer>
      <Hamburger className="hamburger">
        <CgMenuLeftAlt
          className={menuIcon ? "nav-menu-open active" : "nav-menu-open"}
          onClick={addClass}
        />
        <CgClose
          className={menuIcon ? "nav-menu-close active" : "nav-menu-close"}
          onClick={removeClass}
        />
      </Hamburger>
    </Wrapper>
  );
};

export default Nav;
