import { createSlice } from "@reduxjs/toolkit";
import { products } from "../Components/products";

const ProductSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: products,
    filteredProducts: products,
    categories: [],
    selectedCategory: "Filter BY Category",
    searchText: "",
  },
  reducers: {
    setCategories: (state) => {
      // Extract unique categories from the products array
      const categories = state.allProducts.length
        ? ["Filter BY Category", ...new Set(state.allProducts.map((p) => p.category))]
        : ["Filter BY Category"];
      state.categories = categories; // Set categories in the state
    },
    filterProducts: (state, action) => {
      const { category, searchText } = action.payload;

      // Filter products based on category and search text
      const filtered = state.allProducts.filter((product) => {
        const matchesCategory = category === "Filter BY Category" || product.category === category;
        const matchesSearch = product.productName
          .toLowerCase()
          .includes(searchText.toLowerCase());

        return matchesCategory && matchesSearch; // Product must match both criteria
      });

      // Update state with filtered products
      state.filteredProducts = filtered;
      state.selectedCategory = category; // Set the selected category
      state.searchText = searchText; // Set the search text
    },
  },
});

export const { setCategories, filterProducts } = ProductSlice.actions;
export default ProductSlice.reducer;
