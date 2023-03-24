const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING_FEATURE":
      return {
        ...state,
       isLoadingFilter: true
      };
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
       isLoadingFilter: false,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "GET_SELECTED_TYPE": {
      let selectedId = document.getElementById("sort");
      let selectedType = selectedId.options[selectedId.selectedIndex].value;
      return {
        ...state,
        selected_type: selectedType,
      };
    }

    case "UPDATE_FILTER_VALUE": {
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    }

    case "SET_CATEGORY_VALUE": {
      let categoryData;
      if (state.category_value === "mobile") {
        categoryData = action.payload.filter((curelm) => {
          return curelm.category === "mobile";
        });
      }
      if (state.category_value === "laptop") {
        categoryData = action.payload.filter((curelm) => {
          return curelm.category === "laptop";
        });
      }
      if (state.category_value === "computer") {
        categoryData = action.payload.filter((curelm) => {
          return curelm.category === "computer";
        });
      }
      if (state.category_value === "accessories") {
        categoryData = action.payload.filter((curelm) => {
          return curelm.category === "accessories";
        });
      }
      if (state.category_value === "watch") {
        categoryData = action.payload.filter((curelm) => {
          return curelm.category === "watch";
        });
      }

      if (state.category_value === "all") {
        categoryData = action.payload;
      }

      return {
        ...state,
        filter_products: categoryData,
      };
    }
    case "SET_COLOR_PRODUCT": {
      const { color_value, all_products } = state;
      let tempProduct = [...all_products];
      tempProduct = tempProduct.filter((curelm) => {
        return curelm.colors.includes(color_value);
      });
      return {
        ...state,
        filter_products: tempProduct,
      };
    }
    case "LOAD_COLORS": {
      let colorsArray = [];
      state.all_products?.map((colorsData) => {
        colorsData.colors?.map((data) => {
          if (!colorsArray.includes(data)) {
            colorsArray.push(data);
          }
        });
      });
      return {
        ...state,
        colors: colorsArray,
      };
    }
    case "FILTER_PRODUCTS": {
      const { all_products } = state;
      let filteredProducts = [...all_products];

      const { text } = state.filters;
      if (text) {
        filteredProducts = filteredProducts.filter((data) => {
          return data.name.toLowerCase().includes(text);
        });
      }

      return {
        ...state,
        filter_products: filteredProducts,
      };
    }
    case "SET_SORTING_VALUE": {
      let sortedData;
      let productCopy = [...action.payload];
      let selectedValue = state.selected_type;
      if (selectedValue === "a-z") {
        sortedData = productCopy.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (selectedValue === "lowest") {
        sortedData = productCopy.sort((a, b) => {
          return a.price - b.price;
        });
      }
      if (selectedValue === "highest") {
        sortedData = productCopy.sort((a, b) => {
          return b.price - a.price;
        });
      }
      return {
        ...state,
        filter_products: sortedData,
      };
    }

    default:
      return state;
  }
};

export default filterReducer;
