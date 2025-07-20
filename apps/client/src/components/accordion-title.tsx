import AccordionSummary from '@mui/material/AccordionSummary';
import { FC } from 'react';

interface IProps {
  title: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const AccordionTitle: FC<IProps> = ({ title, onClick }) => {
  return (
    <AccordionSummary onClick={onClick}>
      <h2 className="font-medium text-gray-800">{title}</h2>
    </AccordionSummary>
  );
};
