const ProductReducer = (state, action) => {
  //   if (action.type === "SET_LOADING") {
  //     return {
  //       ...state,
  //       isLoading: true,
  //     };
  //   }

  //   if (action.type === "API_ERROR") {
  //     return {
  //       ...state,
  //       isLoading: false,
  //       isError: true,
  //     };
  //   }
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const featuredData = action.payload.filter((curelm) => {
        return curelm.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featuredData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

      case "SET_SINGLEPROD_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLEPROD_DATA":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload
      };

    case "SINGLEPROD_API_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isSingleError: true,
      };
    default:
      return state;
  }

};

export default ProductReducer;
