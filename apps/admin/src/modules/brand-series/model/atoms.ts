import { ICarSeries } from "@autoball-frontend/shared-types";
import { atom, createStore } from "jotai";
import { ChoosedItem } from "../../../shared";


export const brandSeriesStore = createStore()

export const isPostBrandSeriesModalVisibleAtom = atom(false)

export const choosedCarSeriesAtom = atom<ChoosedItem<ICarSeries>>(null)

brandSeriesStore.set(isPostBrandSeriesModalVisibleAtom, false)