import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "@/redux/common/page-slice";
import budgetReducer from "@/redux/task/budget/budget-slice";
import disbitemReducer from "@/redux/task/disbursement/disbitem-slice";

export const store = configureStore({
  reducer: {
    pageReducer, budgetReducer, disbitemReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;