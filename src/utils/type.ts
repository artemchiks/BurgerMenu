import { ChangeEvent, FormEvent } from "react";
import { store } from "../service/store";


export interface Card {
    _id: string;
    name?: string;
    type?: string;
    image_mobile?:string;
    price:number;
}

export type AppDispatch = typeof store.dispatch;