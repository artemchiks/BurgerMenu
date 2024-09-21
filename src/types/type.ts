import { ChangeEvent, FormEvent } from "react";
import { store } from "../service/store";

export type Ingredient = {
  _id: string;
  image?: string;
  name?: string;
  price?: number;
  type?: string;
  image_mobile?: string;
  calories?: number;
  proteins?: number;
  fat?: number;
  carbohydrates?: number;
  bun?: {
    _id: string;
    image_mobile: string;
    price: number;
    name: string;
  };
};

export type RootState = {
  userSlice: {
    name?: string;
    email?: string;
  };
  ingridientList: Ingredient[];
  orderDetalis: {
    order: null | string;
  };
  burgerConstructor: {
    bun: {
      _id?: string;
      price?: number;
      image_mobile?: string;
      name?: string;
    };
    ingridients: (Ingredient & { key: string })[];
  };
  ingridientDetalis: {};
  ordersSlice: {
    orders: [];
  };
};
export interface CreateOrderResponse {
  order: {
    number: number;
  };
  success: boolean;
  message?: string;
}

export interface UserInfo {
  name: string;
  email: string;
  password: string;
}

export interface Order {
  ingredients: string[];
  _id: string;
  status: string;
  number: number;
  createdAt: Date;
  updatedAt: Date;
  total?: number;
  totalToday?: number;
  name?: string;
}
export type AppDispatch = typeof store.dispatch;
