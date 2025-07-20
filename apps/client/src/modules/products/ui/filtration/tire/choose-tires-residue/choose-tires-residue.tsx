import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import { InputTiresReside } from "./input-tires-residue"
import { AccordionTitle } from "@/components/accordion-title"

export const ChooseTiresResidue = () => {

    return (
        <Accordion className="mb-2">
            <AccordionTitle title={"выберите остаток"} />
            <AccordionDetails>
                <InputTiresReside />
            </AccordionDetails>
        </Accordion>
    )
}