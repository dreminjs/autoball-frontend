import { FC } from 'react';
import { BrandList } from './list';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import { AccordionTitle } from '../accordion-title';
import { InputSearch } from '../input-search';
import { BrandType } from '../../../../../../../shared/interfaces/brands/type';
import { useBrands } from '../../../../../../brands/model/hooks/use-brands';

interface IProps {
  type: BrandType;
}

export const ChooseBrand: FC<IProps> = ({ type }) => {
  const { search, onChangeSearchValue, data, inViewRef, states } =
    useBrands(type);
 
  return (
    <Accordion className="border border-gray-200 rounded-lg max-w-xs shadow-sm mb-5 bg-white">
    <AccordionTitle title={'бренд запчасти'} />
      <AccordionDetails>
        <InputSearch search={search} onChange={onChangeSearchValue} />
        <BrandList
          ref={inViewRef}
          data={data}
          states={states}
        />
      </AccordionDetails>
    </Accordion>
  );
};
