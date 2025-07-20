import { useChooseDiscDia } from '@/modules/products/model/hooks/disc/use-disc-dia';
import { FilterInput } from '../filter-input';

export const InputDia = () => {
  const { discDia, onChangeDiscDia } = useChooseDiscDia();

  return (
    <FilterInput
      label={'Высота'}
      value={discDia || 0}
      onChange={(data) => typeof data === 'number' && onChangeDiscDia(data)}
      type={'number'}
    />
  );
};
