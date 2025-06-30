import Accordion from "@mui/material/Accordion"
import { AccordionTitle } from "../../../../../../../components/accordion-title"
import AccordionDetails from "@mui/material/AccordionDetails"
import { InputTiresReside } from "./input-tires-residue"




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