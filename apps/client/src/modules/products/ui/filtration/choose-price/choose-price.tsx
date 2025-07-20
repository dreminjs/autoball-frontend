import AccordionDetails from '@mui/material/AccordionDetails';
import Accordion from '@mui/material/Accordion';
import { InputPrices } from './input-prices';
import { AccordionTitle } from '@/components/accordion-title';

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
