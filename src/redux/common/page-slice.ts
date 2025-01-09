import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: PageState;
};

type PageState = {
  title: string;
  path: string;
};

const initialState = {
  value: {
    title: '',
    path: ''
  } as PageState,
} as InitialState;

export const page = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<string>) => {
      return {
        value: {
          title: action.payload.title,
          path: action.payload.path
        },
      };
    },
  },
});

export const { setPage } = page.actions;
export const getPage = (state) => state.page;
export default page.reducer;