import AccordionDetails from '@mui/material/AccordionDetails';
import { AccordionTitle } from '../accordion-title';
import Accordion from '@mui/material/Accordion';
import { InputPrices } from './input-prices';

export const ChoosePrice = () => {
  return (
    <Accordion className="mb-2">
      <AccordionTitle title={'Цена'} />
      <AccordionDetails>
        <InputPrices />
      </AccordionDetails>
    </Accordion>
  );
};
