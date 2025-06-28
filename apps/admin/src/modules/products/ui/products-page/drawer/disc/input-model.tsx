import { useChooseTiresModel } from '../../../../model/hooks/tire/use-choose-tires-model';
import { FilterInput } from '../filter-input';

export const InputModel = () => {
  const { tireModel, onChooseModel } = useChooseTiresModel();

  return (
    <FilterInput
      label={'Модель'}
      value={tireModel || ''}
      onChange={(data) => typeof data === 'string' && onChooseModel(data)}
      type={'string'}
    />
  );
};
