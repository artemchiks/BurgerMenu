import { configureStore } from "@reduxjs/toolkit";
import {
  INGRIDIENT_LIST_SLICE,
  ingridientListReducer,
} from "./ingridientListSlice";
import {
  BURGER_CONSTRUCTOR_SLICE,
  burgerConstructorReducer,
} from "./burgerConstructor";
import {
  INGRIDIENT_DETALIS_SLICE,
  ingridientDetalisReducer,
} from "./ingridientDetalis";
import { ORDER_DETALIS_SLICE, orderDetalisReducer } from "./orderDetalis";
import { USER_SLICE, userReducer } from "./userSlice";

export const store = configureStore({
  reducer: {
    [INGRIDIENT_LIST_SLICE]: ingridientListReducer,
    [BURGER_CONSTRUCTOR_SLICE]: burgerConstructorReducer,
    [INGRIDIENT_DETALIS_SLICE]: ingridientDetalisReducer,
    [ORDER_DETALIS_SLICE]: orderDetalisReducer,
    [USER_SLICE]: userReducer,
  },
});
