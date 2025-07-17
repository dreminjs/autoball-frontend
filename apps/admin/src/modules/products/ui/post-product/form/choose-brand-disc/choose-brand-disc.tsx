import Accordion from '@mui/material/Accordion';
import { AccordionTitle } from '../../../../../../components/accordion-title';
import { useBrands } from '../../../../../brands/model/hooks/use-brands';
import { InputSearch } from '../../../../../../components/input-search';
import AccordionDetails from '@mui/material/AccordionDetails';
import { BrandList } from './brand-list';
import { FC } from 'react';

interface IProps {
  onToggleActiveAccordion: () => void
}

export const ChooseBrandDisc: FC<IProps> = ({ onToggleActiveAccordion }) => {
  const { search, onChangeSearchValue, data, inViewRef, states } =
    useBrands('disc');

  return (
    <Accordion className="border border-gray-200 rounded-lg max-w-xs shadow-sm bg-white">
      <AccordionTitle onClick={() => onToggleActiveAccordion()} title={`бренды дисков`} />
      <AccordionDetails>
        <InputSearch search={search} onChange={onChangeSearchValue} />
        <BrandList ref={inViewRef} data={data} states={states} />
      </AccordionDetails>
    </Accordion>
  );
};
