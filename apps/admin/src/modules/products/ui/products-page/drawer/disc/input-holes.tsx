import { useChooseDiscHoles } from '../../../../model/hooks/disc/use-disc-holes';
import { FilterInput } from '../filter-input';

export const InputHoles = () => {
  const { onChangeDiscHoles, discHoles } = useChooseDiscHoles();

  return (
    <FilterInput
      label={'Отверстия'}
      value={discHoles || 0}
      onChange={(data) => typeof data === 'number' && onChangeDiscHoles(data)}
      type={'number'}
    />
  );
};
