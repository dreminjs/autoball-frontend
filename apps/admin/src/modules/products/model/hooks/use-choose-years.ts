import { useAtom } from 'jotai';
import { yearFromAtom, yearToAtom } from '../atoms-page';

export const useChooseYears = () => {
  const [yearFrom, setYearFrom] = useAtom(yearFromAtom);

  const [yearTo, setYearTo] = useAtom(yearToAtom);

  const handleChangeYearFrom = (newYear: string | null) => setYearFrom(newYear);

  const handleChangeYearTo = (newYear: string | null) => setYearTo(newYear);

  return {
    yearFrom,
    yearTo,
    onChangeYearFrom: handleChangeYearFrom,
    onChangeYearTo: handleChangeYearTo,
  };
};
