import { useAtom } from 'jotai';
import { carPartIdAtom } from '../../product-atoms-page';

export const useChooseCarPartId = () => {
  const [choosedCarPartId, setChoosedCarPartId] = useAtom(carPartIdAtom);

  const handleChooseCarPartId = (data: string | null) => setChoosedCarPartId(data);

  return {choosedCarPartId, onChooseCarPartId: handleChooseCarPartId};
};
