import { useContext } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  isLoadingFilter: false,
  all_products: [],
  selected_type: "lowest",
  category_value: "all",
  color_value: "all",
  filters: {
    text: "",
    colors: "",
  },
  totalProducts: "",
};
export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  const sorting = () => {
    dispatch({ type: "GET_SELECTED_TYPE" });
  };
 
  const updateFilter = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  const getCatValue = (e) => {
    state.category_value = e.target.getAttribute("value");
    dispatch({ type: "SET_CATEGORY_VALUE", payload: products });
  };

  useEffect(() => {
    dispatch({ type: "LOAD_COLORS" });
  }, [state.all_products]);

  const getColor = (e) => {
    let clickedColor = e.target.getAttribute("color");
    state.color_value = clickedColor;
    return (dispatch({ type: "SET_COLOR_PRODUCT" }));
  };


  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [state.filters]);

  useEffect(() => {
    dispatch({ type: "SET_SORTING_VALUE", payload: products });
  }, [products, state.selected_type]);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  state.totalProducts = state?.filter_products.length;
  return (
    <FilterContext.Provider
      value={{ ...state, sorting, getCatValue, updateFilter, getColor }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
