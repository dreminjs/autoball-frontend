import { atom, createStore } from "jotai";


export const carPartsStore = createStore()

export const choosedItemIdAtom = atom<string | null>()

export const isPostCarPartsModalVisibleAtom = atom(false)

carPartsStore.set(choosedItemIdAtom, null)

carPartsStore.set(isPostCarPartsModalVisibleAtom, false)