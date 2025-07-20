import { AccordionTitle } from '@/components/accordion-title';
import { InputSearch } from '@/components/input-search';
import { useWheelComponentsBrands } from '@/modules/wheels/model/hooks/use-wheel-components-brand';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import { DiscBrandList } from './tire-brand-list';

export const ChooseTireBrand = () => {
  const { search, states, onChangeSearchValue, data, inViewRef } =
    useWheelComponentsBrands('tire');

  return (
    <Accordion className="border border-gray-200 rounded-lg max-w-xs shadow-sm mb-5 bg-white">
      <AccordionTitle title={'бренды шин'} />
      <AccordionDetails>
        <InputSearch search={search} onChange={onChangeSearchValue} />

        <DiscBrandList ref={inViewRef} data={data} states={states} />
      </AccordionDetails>
    </Accordion>
  );
};
