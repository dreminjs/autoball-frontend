import { atom, createStore } from "jotai";
import { IOrderProductInfo } from "./types/dto";

export const editOrdersStore = createStore()

export const orderProductInfoAtom = atom<IOrderProductInfo[]>([])

editOrdersStore.set(orderProductInfoAtom, [])