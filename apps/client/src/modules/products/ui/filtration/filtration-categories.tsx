import { ChooseBody } from './choose-body';
import { ChooseFuel } from './choose-fuel';
import { ChooseGearbox } from './choose-gearbox';
import { ChoosePrice } from './choose-price/choose-price';
import { ChooseYear } from './choose-year/choose-year';
import { DiscFilter } from './disc/disc-filter';
import { ChooseBrand } from './items-list/choose-brand-list/choose-brand';
import { ChooseCarPart } from './items-list/choose-car-part/choose-car-part';
import { ChooseSeries } from './items-list/choose-series-list/choose-series';
import { TireFilter } from './tire/tire-filter';

export const FiltrationCategories = () => {
  return (
    <>
      <ChooseBrand type={'car'} />
      <ChooseSeries />
      <ChooseCarPart />
      <ChooseYear />
      <ChoosePrice />
      <DiscFilter />
      <TireFilter />
      <ChooseFuel />
      <ChooseBody />
      <ChooseGearbox />
    </>
  );
};
