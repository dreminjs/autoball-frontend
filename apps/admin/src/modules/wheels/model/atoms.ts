import { atom, createStore } from "jotai";



export const wheelComponentsStore = createStore()

export const choosedItemIdAtom = atom<string | null>()

export const isPostWheelComponentBrandModalVisibleAtom = atom(false)

wheelComponentsStore.set(choosedItemIdAtom, null)

wheelComponentsStore.set(isPostWheelComponentBrandModalVisibleAtom, false)