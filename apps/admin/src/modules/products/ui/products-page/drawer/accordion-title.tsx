import AccordionSummary from "@mui/material/AccordionSummary";
import { FC } from "react";

interface IProps {
    title: string
}

export const AccordionTitle:FC<IProps> = ({title}) => {
  return (
    <AccordionSummary>
      <h2 className="font-medium text-gray-800">
        {title}
      </h2>
    </AccordionSummary>
  );
};
