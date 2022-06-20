import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const url = 'https://course-api.com/react-useReducer-cart-project'
export const getCartItems = createAsyncThunk('cart/getItems',()=> {
  return fetch(url).then(response => response.json()).catch(console.log())
})
const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      console.log(action);
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increaseAmount: (state, { payload }) => {
      console.log(payload);
      const itemResult = state.cartItems.find((item) => item.id === payload);
      console.log(itemResult);
      itemResult.amount += 1;
    },
    decreaseAmount: (state, { payload }) => {
      console.log(payload);
      const itemResult = state.cartItems.find((item) => item.id === payload);
      console.log(itemResult);
      itemResult.amount -= 1;
    },
    calculateTotal: (state) => {
      let total = 0;
      let amount = 0;
      state.cartItems.forEach(item => {
        amount = amount + item.amount
        total = total + item.amount * item.price
      })
      state.amount = amount;
      state.total = total.toFixed(2)
    },
  },extraReducers:{
    [getCartItems.pending]:(state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state,action)=>{
      state.cartItems = action.payload;
      state.isLoading = false;
    },
    [getCartItems.rejected]: (state, action) => {
      state.isLoading = false;
    }
  }
});

export default cartSlice.reducer;
export const { clearCart, removeItem, increaseAmount, decreaseAmount, calculateTotal } =
  cartSlice.actions;
