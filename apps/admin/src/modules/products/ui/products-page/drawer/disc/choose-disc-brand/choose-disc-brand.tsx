import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useWheelComponentsBrands } from '../../../../../../wheels/model/hooks/use-wheel-components-brand';
import { AccordionTitle } from '../../accordion-title';
import { DiscBrandList } from './disc-brand-list';
import { InputSearch } from '../../items-list/input-search';

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
