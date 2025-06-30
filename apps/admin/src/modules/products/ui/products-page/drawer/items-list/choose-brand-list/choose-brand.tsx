import { FC } from 'react';
import { BrandList } from './list';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import { AccordionTitle } from '../../../../../../../components/accordion-title';
import { InputSearch } from '../../../../../../../components/input-search';
import { BrandType } from '../../../../../../../shared/types/brands/type';
import { useBrands } from '../../../../../../brands/model/hooks/use-brands';
import { typesBrandsLabels } from '../../../../../model/data';

interface IProps {
  type: BrandType;
}

export const ChooseBrand: FC<IProps> = ({ type }) => {
  const { search, onChangeSearchValue, data, inViewRef, states } =
    useBrands(type);
 
  return (
    <Accordion className="border border-gray-200 rounded-lg max-w-xs shadow-sm mb-2 bg-white">
    <AccordionTitle title={`бренды ${typesBrandsLabels[type]}`} />
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
