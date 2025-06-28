import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import { CarPartList } from './list/car-part-list';
import { useCarParts } from '../../../../../../car-parts/model/hooks/use-car-parts';
import { InputSearch } from '../input-search';
import { AccordionTitle } from '../../accordion-title';

export const ChooseCarPart = () => {
  const { states, inViewRef, data, search, onChangeSearchValue } =
    useCarParts();

  return (
    <Accordion className="border border-gray-200 rounded-lg max-w-xs shadow-sm mb-2 bg-white">
      <AccordionTitle title={'тип запчасти'} />
      <AccordionDetails>
        <InputSearch search={search} onChange={onChangeSearchValue} />
        <CarPartList data={data} ref={inViewRef} states={states} />
      </AccordionDetails>
    </Accordion>
  );
};
