import Accordion from '@mui/material/Accordion';
import { AccordionTitle } from '../../../../../../components/accordion-title';
import { useBrands } from '../../../../../brands/model/hooks/use-brands';
import { InputSearch } from '../../../../../../components/input-search';
import AccordionDetails from '@mui/material/AccordionDetails';
import { BrandList } from './brand-list';

export const ChooseBrandDisc = () => {
  const { search, onChangeSearchValue, data, inViewRef, states } =
    useBrands('disc');

  return (
    <Accordion className="border border-gray-200 rounded-lg max-w-xs shadow-sm mb-2 bg-white">
      <AccordionTitle title={`бренды диск`} />
      <AccordionDetails>
        <InputSearch search={search} onChange={onChangeSearchValue} />
        <BrandList ref={inViewRef} data={data} states={states} />
      </AccordionDetails>
    </Accordion>
  );
};
