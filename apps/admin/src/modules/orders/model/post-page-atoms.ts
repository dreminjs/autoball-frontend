import { atom, createStore } from "jotai";
import { IOrderProductInfo } from "./types/dto";

export const postOrdersStore = createStore()

export const orderProductInfoAtom = atom<IOrderProductInfo[]>([])

postOrdersStore.set(orderProductInfoAtom, [])