import { ICarSeries } from "@autoball-frontend/shared-types";
import { atom, createStore } from "jotai";


export const brandSeriesStore = createStore()

export const isPostBrandSeriesModalVisibleAtom = atom(false)

export const choosedCarSeriesAtom = atom<(ICarSeries & { type: 'delete' | 'edit' }) | null>(null)

brandSeriesStore.set(isPostBrandSeriesModalVisibleAtom, false)