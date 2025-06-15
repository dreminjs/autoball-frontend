import { atom, createStore } from "jotai";




export const carBrandsStore = createStore()

export const choosedBrandIdAtom = atom<string | null>(null)

carBrandsStore.set(choosedBrandIdAtom, null)