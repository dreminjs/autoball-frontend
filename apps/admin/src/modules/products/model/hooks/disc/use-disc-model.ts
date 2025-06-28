import { useAtom } from 'jotai';
import { discModelAtom } from '../../atoms-page';

export const useChooseDiscModel = () => {
  const [discModel, setDiscModel] = useAtom(discModelAtom);

  const handleChangeDiscModel = (data: string) => setDiscModel(data);

  return { discModel, onChangeDiscModel: handleChangeDiscModel };
};
