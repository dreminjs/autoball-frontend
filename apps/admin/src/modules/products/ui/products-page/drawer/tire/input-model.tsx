import { useChooseDiscModel } from '../../../../model/hooks/products/disc/use-disc-model';
import { FilterInput } from '../filter-input';

export const InputModel = () => {
  const { discModel, onChangeDiscModel } = useChooseDiscModel();

  return (
    <FilterInput
      label={'Модель'}
      value={discModel || ''}
      onChange={(data) => typeof data === 'string' && onChangeDiscModel}
      type={'string'}
    />
  );
};
