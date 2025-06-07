import { ProductCondition } from '@autoball-frontend/shared-types';
import { atom, createStore } from 'jotai';

export const storePage = createStore();

export const brandIdsAtom = atom<string[]>([]);

export const seriesIdsAtom = atom<string[]>([]);

export const conditionAtom = atom<ProductCondition>('new');

storePage.set(brandIdsAtom, []);

storePage.set(seriesIdsAtom, []);

storePage.set(conditionAtom, 'used');
