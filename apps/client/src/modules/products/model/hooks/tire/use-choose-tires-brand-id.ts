
import { useAtom } from 'jotai';
import { tiresBrandIdAtom } from '../../product-atoms-page';

export const useChooseTireId = () => {
  const [tirebrandId, setTireBrandId] = useAtom(tiresBrandIdAtom);

  const handleChooseBrand = (data: string | null) => setTireBrandId(data);

  return {
    onChooseBrandId: handleChooseBrand,
    tirebrandId,
  };
};
