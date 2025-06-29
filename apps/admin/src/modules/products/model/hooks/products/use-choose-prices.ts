import { useAtom } from 'jotai';
import { priceFromAtom, priceToAtom } from '../../..';

export const useChoosePrices = () => {
  const [priceFrom, setPriceFrom] = useAtom(priceFromAtom);

  const [priceTo, setPriceTo] = useAtom(priceToAtom);

  const handleChangePriceFrom = (newYear: string | null) =>
    setPriceFrom(newYear);

  const handleChangePriceTo = (newYear: string | null) => setPriceTo(newYear);

  return {
    priceFrom,
    priceTo,
    onChangePriceFrom: handleChangePriceFrom,
    onChangePriceTo: handleChangePriceTo,
  };
};
