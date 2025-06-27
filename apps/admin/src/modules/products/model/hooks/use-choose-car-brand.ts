import { useAtom } from 'jotai';
import { brandIdAtom } from '../atoms-page';

export const useChooseCarBrand = () => {
  const [brandId, setBrandId] = useAtom(brandIdAtom);

  const handleChooseBrand = (data: string | null) => setBrandId(data);

  return {
    onChooseBrand: handleChooseBrand,
    brandId,
  };
};
