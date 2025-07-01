import { atom, createStore } from "jotai";
import { IOrderProductInfo } from "./types/dto";



export const ordersStore = createStore()

export const articleAtom = atom<IOrderProductInfo[]>([])

ordersStore.set(articleAtom, [])