import { ICarPart } from '@autoball-frontend/shared-types';
import { atom, createStore } from 'jotai';
import { Actions, } from '../../../shared';

export const carPartsStore = createStore();

export const choosedItemIdAtom = atom<string | null>();

export const isPostCarPartsModalVisibleAtom = atom(false);

export const choosedCarPartAtom = atom<
  (ICarPart & Actions) | null
>();

carPartsStore.set(choosedCarPartAtom, null)

carPartsStore.set(choosedItemIdAtom, null);

carPartsStore.set(isPostCarPartsModalVisibleAtom, false);
