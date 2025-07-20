import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import { FC } from 'react';
import { CarSeriesList } from './list/car-series-list';
import { useAtomValue } from 'jotai';
import { AccordionTitle } from '../../../../../../../components/accordion-title';
import { carBrandIdAtom } from '../../../../../model/product-atoms-page';
import { useCarSeries } from '../../../../../../car-series/model/hooks/use-car-series';

export const ChooseSeries: FC = () => {
  const chooseBrandId = useAtomValue(carBrandIdAtom);
  const { data, inViewRef, states } = useCarSeries(chooseBrandId || null);

  return (
    <Accordion className="border border-gray-200 rounded-lg max-w-xs shadow-sm mb-2 bg-white">
    <AccordionTitle title={'Серию бренда запчасти'} />
      <AccordionDetails>
        {chooseBrandId ? (
          <CarSeriesList ref={inViewRef} data={data} states={states} />
        ) : (
          <li className="list-none">Серии бренда запчасти не выбран</li>
        )}
      </AccordionDetails>
    </Accordion>
  );
};
