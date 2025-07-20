import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import { InputYears } from "./input-years"
import { AccordionTitle } from "@/components/accordion-title"




export const ChooseYear = () => {

    return (
        <Accordion className="mb-2">
            <AccordionTitle title={"Год"} />
            <AccordionDetails>
                <InputYears />
            </AccordionDetails>
        </Accordion>
    )
}