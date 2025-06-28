import AccordionSummary from "@mui/material/AccordionSummary";
import { FC } from "react";

interface IProps {
    title: string
}

export const AccordionTitle:FC<IProps> = ({title}) => {
  return (
    <AccordionSummary>
      <h2 className="font-medium text-gray-800">
        Выберите <span className="font-bold underline">{title}</span>{' '}
      </h2>
    </AccordionSummary>
  );
};
