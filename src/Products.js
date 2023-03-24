import React, { useState } from "react";
import styled from "styled-components";
import { CgMenuLeftAlt } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { useFilterContext } from "./context/FilterContext";
import { BiCheck } from "react-icons/bi";
import { Audio } from "react-loader-spinner";

const Wrapper = styled.div`
  padding: 5rem 20rem;
  display: flex;
  justify-content: space-evenly;
  height: 92vh;
`;
const FilterContainer = styled.div`
  width: 25rem;
  height: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 24rem;
  justify-content: space-between;

  .title {
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;
const Text = styled.p`
  cursor: pointer;
`;
const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 5rem;
  justify-content: space-between;

  .title {
    font-weight: bold;
    margin-bottom: 1rem;
  }

  select {
    padding: 1rem 0rem;
  }
`;
const ColorsFilter = styled.div`
  display: flex;
  flex-direction: column;
  height: 4rem;
  justify-content: center;
`;
const ClearFilterButton = styled.button`
  width: 20rem;
  height: 5rem;
  color: white;
  outline: none;
  border: none;
  background-color: lightgreen;
`;
const ProductContainer = styled.div`
  width: 80rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex-wrap: wrap;
`;

const ProdFilterCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5%;

  select {
    padding: 0.5rem 0rem;
  }

  .icon {
    font-size: 3rem;
  }
`;

const ProductsData = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  height: 90%;
  flex-wrap: wrap;
`;

const ProductCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 20rem;
  width: 24rem;
  position: relative;
  margin: 1rem;
  padding: 1.2rem;
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 4px;
  position: relative;

  &:hover {
    transform: scale(1.2);
    transition: all 0.4s ease-in;
    background-color: black;
    color: white;
    .price {
      color: white;
    }
    .productName {
      color: white;
    }
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const Category = styled.div`
  position: absolute;
  top: 20px;
  right: 25px;
  height: 3rem;
  width: 8rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  color: black;
  text-transform: uppercase;
`;
const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  padding-top: 1rem;
  .price {
    color: lightgreen;
  }
`;

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

const Products = () => {
  const {
    filter_products,
    sorting,
    getCatValue,
    updateFilter,
    filters: { text },
    totalProducts,
    products,
    colors,
    getColor,
    isLoadingFilter,
  } = useFilterContext();
  const [curColor, setCurColor] = useState(colors);

  const handleClick = (data) => {
    getColor();
  };
  return (
    <Wrapper>
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      <FilterContainer>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="search"
            name="text"
            value={text}
            onChange={updateFilter}
          />
        </form>
        <CategoryContainer id="category" onClick={getCatValue}>
          <p className="title">Categories</p>
          <Text value="all" onClick={getCatValue}>
            All
          </Text>
          <Text value="mobile" onClick={getCatValue}>
            Mobile
          </Text>
          <Text value="laptop" onClick={getCatValue}>
            Laptop
          </Text>
          <Text value="computer" onClick={getCatValue}>
            Computer
          </Text>
          <Text value="accessories" onClick={getCatValue}>
            Accessories
          </Text>
          <Text value="watch" onClick={getCatValue}>
            Watch
          </Text>
        </CategoryContainer>
        <CompanyContainer>
          <Text className="title">Company</Text>
          <select name="Cars" id="">
            <option value="a-z">A to Z</option>
            <option value="lowest">Price: Low to High</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </CompanyContainer>
        <ColorContainer>
          <Text>
            Color:
            {colors?.map((color) => {
              return (
                <ColorSpan color={color} onClick={getColor}>
                  {curColor === color ? <BiCheck color="white" /> : null}
                </ColorSpan>
              );
            })}
          </Text>
        </ColorContainer>
        <ClearFilterButton>Clear Filter</ClearFilterButton>
      </FilterContainer>
      <ProductContainer>
        <ProdFilterCont>
          <CgMenuLeftAlt className="icon" />
          <Text>{totalProducts} Total Results</Text>
          <select name="Cars" id="sort" onClick={sorting}>
            <option value="volvo">Filter</option>
            <option value="" disabled>
              {" "}
            </option>
            <option value="a-z">A-Z</option>
            <option value="" disabled>
              {" "}
            </option>
            <option value="lowest">Price: Low to High</option>
            <option value="" disabled>
              {" "}
            </option>
            <option value="highest">Price: High to Low</option>
          </select>
        </ProdFilterCont>
        <ProductsData>
          {isLoadingFilter === true ? (
            <Audio
              height="80"
              width="80"
              radius="9"
              color="green"
              ariaLabel="three-dots-loading"
              wrapperStyle
              wrapperClass
            />
          ) : (
            filter_products?.map((data) => {
              return (
                <ProductCard>
                  <NavLink to={`/singleproduct/${data.id}`} state={data.image}>
                    <Image src={data.image}></Image>
                    <Category>{data.company}</Category>
                  </NavLink>
                  <DetailsContainer>
                    <Text className="productName">{data.name}</Text>
                    <Text className="price">{data.price}₹</Text>
                  </DetailsContainer>
                </ProductCard>
              );
            })
          )}
        </ProductsData>
      </ProductContainer>
    </Wrapper>
  );
};

export default Products;
