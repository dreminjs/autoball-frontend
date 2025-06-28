import { useAtom } from 'jotai';
import { carBrandIdAtom } from '../../atoms-page';

export const useChooseCarBrandId = () => {
  const [brandId, setBrandId] = useAtom(carBrandIdAtom);

  const handleChooseBrand = (data: string | null) => setBrandId(data);

  return {
    onChooseBrand: handleChooseBrand,
    brandId,
  };
};
