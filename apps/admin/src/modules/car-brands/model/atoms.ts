import { ICarBrand } from "@autoball-frontend/shared-types";
import { atom, createStore } from "jotai";
import { ChoosedItem } from "../../../shared";

export const carBrandsStore = createStore()

export const choosedBrandIdAtom = atom<string | null>(null)

export const isPostCarBrandModalVisibleAtom = atom(false)

export const choosedBrandAtom = atom<ChoosedItem<ICarBrand>>(null)

carBrandsStore.set(choosedBrandAtom, null)

carBrandsStore.set(isPostCarBrandModalVisibleAtom, false)

carBrandsStore.set(choosedBrandIdAtom, null)
