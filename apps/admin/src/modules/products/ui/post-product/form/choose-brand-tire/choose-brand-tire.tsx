import Accordion from '@mui/material/Accordion';
import { AccordionTitle } from '../../../../../../components/accordion-title';
import { useBrands } from '../../../../../brands/model/hooks/use-brands';
import { InputSearch } from '../../../../../../components/input-search';
import AccordionDetails from '@mui/material/AccordionDetails';
import { BrandList } from './brand-list';
import { FC } from 'react';

interface IProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const ChooseBrandTire: FC<IProps> = ({ onClick }) => {
  const { search, onChangeSearchValue, data, inViewRef, states } =
    useBrands('tire');

  return (
    <Accordion className="border border-gray-200 rounded-lg max-w-xs shadow-smbg-white">
      <AccordionTitle onClick={onClick} title={`бренды шин`} />
      <AccordionDetails>
        <InputSearch search={search} onChange={onChangeSearchValue} />
        <BrandList ref={inViewRef} data={data} states={states} />
      </AccordionDetails>
    </Accordion>
  );
};
