import { useReducer } from "react";
import { createContext, useContext } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const initialState = {
cart: [],
totalItems: ''
}
export const CartContextProvider = ({children}) =>{
const [state, dispatch] = useReducer(reducer, initialState);

const cartData = (color,ammount,product) =>{
dispatch({type: "SET_CART_DATA", payload: {color,ammount,product}})
}

const deleteItem = (id, e) =>{
    console.log(id);
    const { cart } = state;
dispatch({type: "REMOVE_CART_DATA", payload: {id, cart}})    
}
state.totalItems = state.cart.length;

return(
<CartContext.Provider value={{ ...state, cartData, deleteItem }}>{children}</CartContext.Provider>
) 
}

export const useCartContext = () => {
    return useContext(CartContext);
  };