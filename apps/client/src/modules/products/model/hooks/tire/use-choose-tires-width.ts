import { useAtom } from 'jotai';
import { tiresWidthAtom } from '../../product-atoms-page';

export const useChooseTiresWidth = () => {
  const [tiresWidth, setTiresWidth] = useAtom(tiresWidthAtom);

  const handleChooseWidth = (data: string | null) => {
    console.log(data)
    setTiresWidth(data);
  };

  return {
    onChooseWidth: handleChooseWidth,
    tiresWidth,
  };
};
