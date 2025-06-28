import { useChooseTiresIndex } from '../../../../model/hooks/tire/use-choose-tires-index';
import { FilterInput } from '../filter-input';

export const InputIndex = () => {
  const { tiresIndex, onChooseIndex } = useChooseTiresIndex();

  return (
    <FilterInput
      label={'Индекс нагрузки'}
      value={tiresIndex || ''}
      onChange={(data) => typeof data === 'string' && onChooseIndex(data)}
      type={'text'}
    />
  );
}