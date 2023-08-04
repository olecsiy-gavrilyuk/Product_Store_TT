import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'Order 1',
    date: '2017/06/29 12:09:33',
    description: 'desc',
    producdId: [1,3,4],
  },
  {
    id: 2,
    title: 'Order 2',
    date: '2017/06/29 12:09:33',
    description: 'desc',
    producdId: [2,5,6],
  },
  {
    id: 3,
    title: 'Order 3',
    date: '2017/06/29 12:09:33',
    description: 'desc',
    producdId: [7,8,9,10],
  }
]

const ordersSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
    },
    removeOrder: (state, action) => {
      const idToRemove = action.payload;
      return state.filter(order => order.id !== idToRemove);
    },
    deleteProductFromOrder: (state, action) => {
      const { orderId, productId } = action.payload;
      return state.map((order) => {
        if (order.id === orderId) {
          return {
            ...order,
            producdId: order.producdId.filter((id) => id !== productId),
          };
        }
        return order;
      });
    },
  },
});

type OrdersSliceType = ReturnType<typeof ordersSlice.reducer>;
export const { removeOrder,deleteProductFromOrder,addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;