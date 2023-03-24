import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
background-color: ${({theme})=> theme.colors.bg};
height: 30vh;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;

@media (max-width: ${({theme})=> theme.media.mobile}){
  .logo-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
  }
}
`

const Para = styled.p`
font-weight: 400;
margin-top: 2rem;
`
const LogoContainer = styled.div`
display: flex;
height: 50%;
width: 45%;
justify-content: space-between;
align-items: center;
`
const Logo = styled.img`
height: 7rem;
width: 9rem;
border-radius: 100%;
`

const Trusted = () => {
  return (
    <Wrapper>
      <Para>Trusted By 100+ Companies</Para>
        <LogoContainer className='logo-container'>
          <Logo src='images/com.jpg'></Logo>
          <Logo src='images/com1.png'></Logo>
          <Logo src='images/com1.png'></Logo>
          <Logo src='images/com.jpg'></Logo>
          <Logo src='images/com1.png'></Logo>
        </LogoContainer>
    </Wrapper>
  )
}

export default Trusted