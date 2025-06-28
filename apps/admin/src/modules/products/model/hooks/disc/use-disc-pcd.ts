import { useAtom } from 'jotai';
import { discPcdAtom } from '../../atoms-page';

export const useChooseDiscPcd = () => {
  const [discPcd, setDiscPcd] = useAtom(discPcdAtom);

  const handleChangeDiscPcd = (data: number) => setDiscPcd(data);

  return { discPcd, onChangeDiscPcd: handleChangeDiscPcd };
};
