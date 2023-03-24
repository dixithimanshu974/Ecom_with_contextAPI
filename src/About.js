import React, { useContext } from 'react'
import HeroSection from './components/HeroSection'
import { useProductContext } from './context/productcontext'

const About = () => {
  // const myName = useProductContext();
  var name = 'SHOPIFY ABOUT'
  return (
    <HeroSection myData = { name  }/>
  )
}

export default About