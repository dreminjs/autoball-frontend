import { atom, createStore } from "jotai";

export const carBrandsStore = createStore()

export const choosedBrandIdAtom = atom<string | null>(null)

export const isPostCarBrandModalVisibleAtom = atom(false)

carBrandsStore.set(isPostCarBrandModalVisibleAtom, false)

carBrandsStore.set(choosedBrandIdAtom, null)
