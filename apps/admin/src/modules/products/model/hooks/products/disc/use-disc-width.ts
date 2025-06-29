import { useAtom } from 'jotai';
import { discWidthAtom } from '../../../product-atoms-page';

export const useChooseDiscWidth = () => {
  const [discWidth, setDiscWidth] = useAtom(discWidthAtom);

  const handleChangeDiscWidth = (newValue: number) => setDiscWidth(newValue);

  return { onChangeDiscWidth: handleChangeDiscWidth, discWidth };
};
