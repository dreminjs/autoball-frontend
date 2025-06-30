import { IListItem } from '@autoball-frontend/shared-types';
import { atom, createStore } from 'jotai';

export const postProductsStore = createStore();

export const carBrandAtom = atom<IListItem | null>(null);

export const carPartAtom = atom<IListItem | null>(null);

export const carSeriesAtom = atom<IListItem | null>(null);

export const discBrandAtom = atom<IListItem | null>(null)

export const tireBrandAtom = atom<IListItem | null>(null)

postProductsStore.set(tireBrandAtom, null)

postProductsStore.set(discBrandAtom, null)

postProductsStore.set(carBrandAtom, null);

postProductsStore.set(carPartAtom, null);

postProductsStore.set(carSeriesAtom, null);

