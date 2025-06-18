import {
  BodyType,
  FuelType,
  GearboxType,
  ProductCondition,
} from '@autoball-frontend/shared-types';
import { atom, createStore } from 'jotai';

export const productsStore = createStore();

export const brandIdsAtom = atom<string[]>([]);

export const seriesIdsAtom = atom<string[]>([]);

export const conditionAtom = atom<ProductCondition>('new');

export const fuelAtom = atom<FuelType | null>(null);

export const bodyAtom = atom<BodyType | null>(null);

export const gearboxAtom = atom<GearboxType | null>(null);

export const isPrintedStatusAtom = atom<boolean | null>(null)

export const showScanCheckboxesAtom = atom<boolean>(false);

export const checkboxesAtom = atom<string[]>();

export const countItemsAtom = atom<number>(5)

export const brandIdAtom = atom<string | null>(null)

productsStore.sub(brandIdAtom, () => console.log("Changed"))

productsStore.set(brandIdAtom, null)

productsStore.set(isPrintedStatusAtom, null)

productsStore.set(countItemsAtom, 5)

productsStore.set(brandIdsAtom, []);

productsStore.set(seriesIdsAtom, []);

productsStore.set(conditionAtom, 'used');

productsStore.set(fuelAtom, 'gasoline');

productsStore.set(checkboxesAtom, []);

productsStore.set(showScanCheckboxesAtom, false);
