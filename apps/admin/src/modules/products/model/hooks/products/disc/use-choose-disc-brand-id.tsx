import { useAtom } from 'jotai';
import { discBrandIdAtom } from '../../../product-atoms-page';

export const useChooseDiscBrandId = () => {
  const [discBrandId, setDiscBrandId] = useAtom(discBrandIdAtom);

  const handleChangeDiscBrandId = (data: string | null) => setDiscBrandId(data);

  return { discBrandId, onChangeDiscBrandId: handleChangeDiscBrandId };
};
