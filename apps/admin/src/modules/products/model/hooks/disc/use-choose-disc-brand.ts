import { useAtom } from 'jotai';
import { discBrandIdAtom } from '../../atoms-page';

export const useChooseDiscBrand = () => {
  const [brandId, setBrandId] = useAtom(discBrandIdAtom);

  const handleChooseBrand = (data: string | null) => setBrandId(data);

  return {
    onChooseBrand: handleChooseBrand,
    brandId,
  };
};
