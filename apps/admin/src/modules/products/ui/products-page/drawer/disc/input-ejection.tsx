import { useDiscEjection } from '../../../../model/hooks/products/disc/use-disc-ejection';
import { FilterInput } from '../filter-input';

export const InputEjection = () => {
  const { discEjection, onChangeDiscEjection } = useDiscEjection();

  return (
    <FilterInput
      label={'Выброс'}
      value={discEjection || ''}
      onChange={(data) => typeof data === "string" && onChangeDiscEjection(data)}
      type={'type'}
    />
  );
};
