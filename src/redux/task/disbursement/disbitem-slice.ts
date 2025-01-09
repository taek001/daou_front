import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: [];
};

const initialState = {
  value: []
} as InitialState;

export const disbitem = createSlice({
  name: "disbitem",
  initialState,
  reducers: {
    pushDisbitem: (state, action: PayloadAction) => {
      state.value.push({
        needDelete: false,
        name: "",
        currencyType: "KRW",
        exchangeRate: 1,
        quantity: 1,
        unitPrice: 1
      });
    },
    deleteDisbitem: (state, action: PayloadAction<any>) => {
      state.value.splice(action.payload, 1);
    },
    setDisbitem: (state, action: PayloadAction<any>) => {
      state.value = [...action.payload];
    },
    updateDisbitem: (state, action: PayloadAction<any>) => {
      const temp = [...state.value];
      temp[action.payload.idx] = action.payload.val;
      state.value = [...temp];
    },
  },
});

export const { pushDisbitem, deleteDisbitem, setDisbitem, updateDisbitem} = disbitem.actions;
export default disbitem.reducer;