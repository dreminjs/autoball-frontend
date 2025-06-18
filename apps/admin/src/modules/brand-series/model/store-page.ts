import { atom, createStore } from "jotai";


export const brandSeriesStore = createStore()

export const isPostBrandSeriesModalVisibleAtom = atom(false)

brandSeriesStore.set(isPostBrandSeriesModalVisibleAtom, false)