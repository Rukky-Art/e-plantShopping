import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const {name, cost, image} = action.payload
      const existingItem = state.items.find(item => item.name === name)
      if(existingItem){
        existingItem.quantity++}
      else{state.items.push({name, cost, image, quantity: 1})}
    },
    removeItem: (state, action) => {
      const name = action.payload.name
      state.items = state.items.filter(item => item.name !== name)
    },
    updateQuantity: (state, action) => {

      const { name, quantity } = action.payload; 
      // Find the item in the cart that matches the given name
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // If the item is found, update its quantity to the new value
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
