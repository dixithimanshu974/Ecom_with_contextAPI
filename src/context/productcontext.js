import axios from "axios";
import { useReducer } from "react";
import { useContext, useEffect } from "react";
import { createContext } from "react";
import reducer from "../reducer/productreducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
  isSingleError: false
};

const Appprovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "SINGLEPROD_API_ERROR" });
    }
  };

  const getSingleProducts = async (url) => {
    dispatch({ type: "SET_SINGLEPROD_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProductData = await res.data;
      dispatch({ type: "SET_SINGLEPROD_DATA", payload: singleProductData });
    } catch (error) {
      dispatch({ type: "SET_SINGLEPROD_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProducts }}>
      {children}
    </AppContext.Provider>
  );
};

//custom hook

const useProductContext = () => {
  return useContext(AppContext);
};

export { Appprovider, AppContext, useProductContext };
