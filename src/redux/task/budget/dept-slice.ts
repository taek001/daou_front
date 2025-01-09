import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: BudgetState;
};

type BudgetState = {
  seq: number,
  name: string
};

const initialState = {
  value: [],
} as InitialState;

export const budget = createSlice({
  name: "budget",
  initialState,
  reducers: {
    pushBudget: (state, action: PayloadAction<BudgetState>) => {
      value.push(action.payload);
      return ;
    },
    removeBudget: (state, action: PayloadAction<number>) => {
      value.splice(action.payload, 1)
    }
  },
});

export const { pushBudget, removeBudget } = budget.actions;
export const getBudget = (state) => state.budget;
export default budget.reducer;