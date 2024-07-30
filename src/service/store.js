import { configureStore } from "@reduxjs/toolkit";
import {
  INGRIDIENT_LIST_SLICE,
  ingridientListReducer,
} from "./ingridientListSlice";
import {
  BURGER_CONSTRUCTOR_SLICE,
  burgerConstructorReducer,
} from "./burgerConstructor";

export const store = configureStore({
  reducer: {
    [INGRIDIENT_LIST_SLICE]: ingridientListReducer,
    [BURGER_CONSTRUCTOR_SLICE]: burgerConstructorReducer,
  },
});
