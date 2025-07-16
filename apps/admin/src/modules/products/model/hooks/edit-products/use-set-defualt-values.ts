import { IListItem } from '@autoball-frontend/shared-types';
import { useChooseCarBrand } from './car/use-choose-car-brand';
import { useChooseCarPart } from './car/use-choose-car-part';
import { useChooseSeries } from './car/use-choose-series';
import { useChooseDiscBrand } from './disc/use-choose-disc';
import { useChooseTireBrand } from './tire/use-choose-tire';

interface IPayload {
    tire: IListItem | null
    disc: IListItem | null
    series: IListItem | null
    carPart: IListItem | null
    carBrand: IListItem | null
}

export const useSetDefualtValues = () => {
  const { onChooseTireBrand } = useChooseTireBrand();
  const { onChooseDiscBrand } = useChooseDiscBrand();
  const { onChooseSeries } = useChooseSeries();
  const { onChooseCarPart } = useChooseCarPart();
  const { onChooseBrand } = useChooseCarBrand();

  return {
    onSetValue: (data: IPayload) => {
        onChooseTireBrand(data.tire)
        onChooseDiscBrand(data.disc)
        onChooseSeries(data.series)
        onChooseCarPart(data.carPart)
        onChooseBrand(data.carBrand)
    } 
  }
};
