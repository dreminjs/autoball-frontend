import {
  BodyType,
  FuelType,
  GearboxType,
  TAvailability,
} from '@autoball-frontend/shared-types';
import { atom, createStore } from 'jotai';
import { TTiresCar, TTiresSeason } from '../../../shared/types';
import { TDiameterOption } from './types/dics.interface';
import { ICartItem } from '@/modules/cart';

export const productsStore = createStore();

export const fuelAtom = atom<FuelType | null>(null);

export const bodyAtom = atom<BodyType | null>(null);

export const gearboxAtom = atom<GearboxType | null>(null);

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

export const isCartWarningOpenAtom = atom<boolean>(false)

export const cartItemsAtom = atom<ICartItem[]>([])

productsStore.set(cartItemsAtom, [])

productsStore.set(isCartWarningOpenAtom, false)

productsStore.set(tiresResidueFromAtom, null)

productsStore.set(tiresResidueToAtom, null)

productsStore.set(tiresBrandIdAtom, null)

productsStore.set(tiresModelAtom, null)

productsStore.set(tiresCarTypeAtom, null)

productsStore.set(tiresIndexAtom, null)

productsStore.set(tiresDiameterAtom, null)

productsStore.set(fuelAtom, null);

productsStore.set(bodyAtom, null);

productsStore.set(gearboxAtom, null);

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

