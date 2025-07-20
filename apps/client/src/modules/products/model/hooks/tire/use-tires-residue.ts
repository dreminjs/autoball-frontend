import { useAtom } from "jotai";
import { tiresResidueFromAtom, tiresResidueToAtom } from "../../product-atoms-page";

export const useChooseResidueRange = () => {
  const [residueFrom, setResidueFrom] = useAtom(tiresResidueFromAtom);
  const [residueTo, setResidueTo] = useAtom(tiresResidueToAtom);

  const handleChangeResidueFrom = (newValue: number | null) => setResidueFrom(newValue);
  const handleChangeResidueTo = (newValue: number | null) => setResidueTo(newValue);

  return {
    residueFrom,
    residueTo,
    onChangeResidueFrom: handleChangeResidueFrom,
    onChangeResidueTo: handleChangeResidueTo,
  };
};