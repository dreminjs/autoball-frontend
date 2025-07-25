import { IListItem } from '@autoball-frontend/shared-types';
import { atom, createStore } from 'jotai';

export const editProductsStore = createStore();

export const carBrandAtom = atom<IListItem | null>(null);

export const carPartAtom = atom<IListItem | null>(null);

export const carSeriesAtom = atom<IListItem | null>(null);

export const discBrandAtom = atom<IListItem | null>(null)

export const tireBrandAtom = atom<IListItem | null>(null)

export const deletedPhotosAtom = atom<string[]>([])

editProductsStore.set(deletedPhotosAtom, [])

editProductsStore.set(tireBrandAtom, null)

editProductsStore.set(discBrandAtom, null)

editProductsStore.set(carBrandAtom, null);

editProductsStore.set(carPartAtom, null);

editProductsStore.set(carSeriesAtom, null);

