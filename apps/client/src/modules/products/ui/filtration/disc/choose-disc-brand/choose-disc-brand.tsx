import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import { DiscBrandList } from './disc-brand-list';
import { useWheelComponentsBrands } from '@/modules/wheels/model/hooks/use-wheel-components-brand';
import { AccordionTitle } from '@/components/accordion-title';
import { InputSearch } from '@/components/input-search';

export const ChooseDiscBrand = () => {
  const { search, states, onChangeSearchValue, data, inViewRef } =
    useWheelComponentsBrands('disc');

  return (
    <Accordion className="border border-gray-200 rounded-lg max-w-xs shadow-sm mb-5 bg-white">
      <AccordionTitle title={'бренд диска'} />
      <AccordionDetails>
        <InputSearch search={search} onChange={onChangeSearchValue} />

        <DiscBrandList ref={inViewRef} data={data} states={states} />
      </AccordionDetails>
    </Accordion>
  );
};
