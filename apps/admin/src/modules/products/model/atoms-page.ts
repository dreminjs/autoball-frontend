import {
  BodyType,
  FuelType,
  GearboxType,
  ProductCondition,
} from '@autoball-frontend/shared-types';
import { atom, createStore } from 'jotai';
import { TAvailability } from './types/availability.interface';
import { TDiameterOption } from './types/dics.interface';
import { TTiresCar, TTiresSeason } from '../../../shared/types';

export const productsStore = createStore();

export const conditionAtom = atom<ProductCondition>('new');

export const fuelAtom = atom<FuelType | null>(null);

export const bodyAtom = atom<BodyType | null>(null);

export const gearboxAtom = atom<GearboxType | null>(null);

export const isPrintedStatusAtom = atom<boolean | null>(null);

export const showAvailibeCheckboxesAtom = atom<boolean>(false);

export const showUnavalibleCheckboxesAtom = atom<boolean>(false);

export const showScanCheckboxesAtom = atom<boolean>(false);

export const showUnscanCheckboxesAtom = atom<boolean>(false);

export const checkboxesAtom = atom<string[]>();

export const countItemsAtom = atom<number>(5);

export const carBrandIdAtom = atom<string | null>(null);

export const seriesIdAtom = atom<string | null>(null);

export const carPartIdAtom = atom<string | null>(null);

export const yearFromAtom = atom<string | null>(null);

export const yearToAtom = atom<string | null>(null);

export const priceFromAtom = atom<string | null>(null);

export const priceToAtom = atom<string | null>(null);

export const availabilityAtom = atom<TAvailability | null>(null);

export const discDiameterAtom = atom<TDiameterOption | null>(null);

export const discWidthAtom = atom<number | null>(null);

export const discEjectionAtom = atom<string | null>(null);

export const discDiaAtom = atom<number | null>(null);

export const discHolesAtom = atom<number | null>(null);

export const discModelAtom = atom<string | null>(null);

export const discPcdAtom = atom<number | null>(null);

export const discBrandIdAtom = atom<string | null>(null);

export const tiresDiameterAtom = atom<TDiameterOption | null>(null)

export const tiresSeasonAtom = atom<TTiresSeason | null>(null)

export const tiresWidthAtom = atom<string | null>(null)

export const tiresHeightAtom = atom<number | null>(null) 

export const tiresIndexAtom = atom<string | null>(null)

export const tiresCarTypeAtom = atom<TTiresCar | null>(null)

export const tiresModelAtom = atom<string | null>(null)

export const tiresBrandIdAtom = atom<string | null>(null)

export const tiresResidueFromAtom = atom<number | null>(null)

export const tiresResidueToAtom = atom<number | null>(null)

productsStore.set(tiresResidueFromAtom, null)

productsStore.set(tiresResidueToAtom, null)

productsStore.set(tiresBrandIdAtom, null)

productsStore.set(tiresModelAtom, null)

productsStore.set(tiresCarTypeAtom, null)

productsStore.set(tiresIndexAtom, null)

productsStore.set(tiresDiameterAtom, null)

productsStore.set(conditionAtom, 'used');

productsStore.set(fuelAtom, null);

productsStore.set(bodyAtom, null);

productsStore.set(gearboxAtom, null);

productsStore.set(isPrintedStatusAtom, null);

productsStore.set(showAvailibeCheckboxesAtom, false);

productsStore.set(showUnavalibleCheckboxesAtom, false);

productsStore.set(showScanCheckboxesAtom, false);

productsStore.set(showUnscanCheckboxesAtom, false);

productsStore.set(checkboxesAtom, []);

productsStore.set(countItemsAtom, 5);

productsStore.set(carBrandIdAtom, null);

productsStore.set(seriesIdAtom, null);

productsStore.set(carPartIdAtom, null);

productsStore.set(yearFromAtom, null);

productsStore.set(yearToAtom, null);

productsStore.set(priceFromAtom, null);

productsStore.set(priceToAtom, null);

productsStore.set(availabilityAtom, null);

productsStore.set(discDiameterAtom, null);

productsStore.set(discWidthAtom, null);

productsStore.set(discEjectionAtom, null);

productsStore.set(discDiaAtom, null);

productsStore.set(discHolesAtom, null);

productsStore.set(discModelAtom, null);

productsStore.set(discPcdAtom, null);

productsStore.set(discBrandIdAtom, null);

