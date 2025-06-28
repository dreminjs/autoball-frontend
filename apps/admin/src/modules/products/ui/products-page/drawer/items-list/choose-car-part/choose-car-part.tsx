import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import { CarPartList } from './list/car-part-list';
import { useCarParts } from '../../../../../../car-parts/model/hooks/use-car-parts';
import { useChooseCarPartId } from '../../../../../model/hooks/use-choose-car-part-id';
import { InputSearch } from '../input-search';
import { AccordionTitle } from '../accordion-title';

export const ChooseCarPart = () => {
  const { states, inViewRef, data, search, onChangeSearchValue } =
    useCarParts();

  const { choosedCarPartId } = useChooseCarPartId();

  return (
    <Accordion className="border border-gray-200 rounded-lg max-w-xs shadow-sm mb-5 bg-white">
     <AccordionTitle title={'тип запчасти'} />
      <AccordionDetails>
        {choosedCarPartId ? (
          <>
            <InputSearch search={search} onChange={onChangeSearchValue} />
            <CarPartList data={data} ref={inViewRef} states={states} />
          </>
        ) : (
          <li className="list-none">Бренд запчасти не выбран</li>
        )}
      </AccordionDetails>
    </Accordion>
  );
};
