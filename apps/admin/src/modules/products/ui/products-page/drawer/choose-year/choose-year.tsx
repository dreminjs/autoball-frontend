import Accordion from "@mui/material/Accordion"
import { AccordionTitle } from "../../../../../../components/accordion-title"
import AccordionDetails from "@mui/material/AccordionDetails"
import { InputYears } from "./input-years"




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