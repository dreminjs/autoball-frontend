import { useChooseDiscWidth } from '../../../../model/hooks/disc/use-disc-width';
import { FilterInput } from '../filter-input';

export const InputWidth = () => {
  const { discWidth, onChangeDiscWidth } = useChooseDiscWidth();

  return (
    <FilterInput
      label={'Ширина'}
      value={discWidth || ''}
      onChange={(data) => typeof data === 'number' && onChangeDiscWidth}
      type={'number'}
    />
  );
};
