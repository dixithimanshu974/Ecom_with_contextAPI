const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART_DATA": {
      const { color, ammount, product } = action.payload;
      let cartData = {
        name: product?.name,
        color,
        ammount,
        image: product?.image[0],
        price: product?.price,
        id: product?.id,
      };
      return {
        ...state,
        cart: [...state.cart, cartData],
      };
    }

    case "REMOVE_CART_DATA": {
      let {id, cart} = action.payload;
      let index = cart?.findIndex((obj) => obj.id === id);
      cart?.splice(index, 1);
      return {
        ...state,
        cart: cart,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
