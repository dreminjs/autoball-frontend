import { atom, createStore } from "jotai";

export const brandIdAtom = atom<string[]>([])

const storeDrawer = createStore()

storeDrawer.set(brandIdAtom, [])