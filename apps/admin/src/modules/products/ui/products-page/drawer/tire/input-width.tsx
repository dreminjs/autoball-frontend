import { useChooseTiresWidth } from '../../../../model/hooks/tire/use-choose-tires-width';
import { FilterInput } from '../filter-input';

export const InputWidth = () => {
  const { tiresWidth, onChooseWidth } = useChooseTiresWidth();

  return (
    <FilterInput
      label={'Ширина'}
      value={tiresWidth || ''}
      onChange={(data) => typeof data === 'number' && onChooseWidth}
      type={'number'}
    />
  );
};
