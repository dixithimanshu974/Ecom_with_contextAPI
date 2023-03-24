import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const Container = styled.header`
  height: 8rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg};
  border-bottom: 1px solid white;
`;
const Wrapper = styled.div``;

const Header = () => {
  return (
    <Container className="active">
      <Wrapper>
        <Nav />
      </Wrapper>
    </Container>
  );
};

export default Header;
