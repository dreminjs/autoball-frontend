import { useAtom } from 'jotai';
import { discEjectionAtom } from '../../product-atoms-page';

export const useDiscEjection = () => {
  const [discEjection, setDiscEjection] = useAtom(discEjectionAtom);

  const handleChangeDiscEjection = (newValue: string) => setDiscEjection(newValue);

  return { onChangeDiscEjection: handleChangeDiscEjection, discEjection };
};
