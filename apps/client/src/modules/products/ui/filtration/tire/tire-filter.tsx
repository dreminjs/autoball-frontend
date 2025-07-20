import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import { ChooseDiametr } from "./choose-diametr"
import { InputWidth } from "./input-width"
import { SelectSeason } from "./select-season"
import { SelectCarType } from "./select-car-type"
import { InputModel } from "./input-model"
import { ChooseTireBrand } from "./choose-tire-brand/choose-tire-brand"
import { ChooseTiresResidue } from "./choose-tires-residue/choose-tires-residue"
import { InputIndex } from "./input-index"
import { AccordionTitle } from "@/components/accordion-title"

export const TireFilter = () => {

    return (
        <Accordion className="mb-2">
            <AccordionTitle title={"Фильтрация шин"} />
            <AccordionDetails>
                <ChooseDiametr />
                <InputWidth />
                <SelectSeason />
                <SelectCarType />
                <InputModel />
                <InputIndex/>
                <ChooseTiresResidue />
                <ChooseTireBrand />
            </AccordionDetails>
        </Accordion>
    )
}