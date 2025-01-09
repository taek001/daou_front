import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  origin: [];
  value: [];
  selected: [];
};

type BudgetState = {
  seq: number,
  departmentSeq: number;
  year: number;
  quarter: number;
  amt: number;
};

const initialState = {
  selected: [],
  origin: [{}],
  value: [{}],
  dept: [{}]
} as InitialState;

export const budget = createSlice({
  name: "budget",
  initialState,
  reducers: {
    setSelected: (state, action: PayloadAction<any>) => {
      state.selected = [...action.payload];
    },
    setDept: (state, action: PayloadAction<BudgetState>) => {
      state.dept = [...action.payload];
    },
    setBudge: (state, action: PayloadAction<BudgetState>) => {
      state.value = [...action.payload];
      state.origin = [...action.payload];
    },
    setOriginBudge: (state, action: PayloadAction<BudgetState>) => {
      state.origin = [...action.payload];
    },
    setFilteredBudge: (state, action: PayloadAction<any>) => {
      state.value = [...action.payload];
    },
    pushBudget: (state, action: PayloadAction<BudgetState>) => {
      state.value.push(action.payload);
    },
    deleteBudget: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    }
  },
});

export const { setBudge, pushBudget, deleteBudget, setFilteredBudge ,BudgetState, setDept, setOriginBudge,setSelected} = budget.actions;
export default budget.reducer;