import Accordion from "@mui/material/Accordion"
import { AccordionTitle } from "../accordion-title"
import AccordionDetails from "@mui/material/AccordionDetails"
import { ChooseDiametr } from "./choose-diametr"
import { InputWidth } from "./input-width"
import { InputEjection } from "./input-ejection"
import { InputDia } from "./input-dia"
import { InputHoles } from "./input-holes"
import { InputModel } from "./input-model"
import { InputPcd } from "./input-pcd"
import { ChooseDiscBrand } from "./choose-disc-brand/choose-disc-brand"

export const DiscFilter = () => {

    return (
        <Accordion className="mb-2">
            <AccordionTitle title={"Фильтрация дисков"} />
            <AccordionDetails>
                <ChooseDiametr />
                <InputWidth />
                <InputEjection />
                <InputDia />
                <InputHoles />
                <InputModel />
                <InputPcd />
                <ChooseDiscBrand />
            </AccordionDetails>
        </Accordion>
    )
}