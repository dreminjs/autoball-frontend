import { ICarPart } from "@autoball-frontend/shared-types";
import { atom, createStore } from "jotai";
import { ChoosedItem } from "../../../shared";



export const wheelComponentsStore = createStore()

export const choosedItemIdAtom = atom<string | null>()

export const choosedWheelComponentBrandAtom = atom<ChoosedItem<ICarPart>>()

export const isPostWheelComponentBrandModalVisibleAtom = atom(false)

wheelComponentsStore.set(choosedItemIdAtom, null)

wheelComponentsStore.set(isPostWheelComponentBrandModalVisibleAtom, false)