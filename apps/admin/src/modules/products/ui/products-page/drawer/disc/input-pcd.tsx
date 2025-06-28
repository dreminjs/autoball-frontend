import { useChooseDiscPcd } from '../../../../model/hooks/disc/use-disc-pcd';
import { FilterInput } from '../filter-input';

export const InputPcd = () => {
  const { discPcd, onChangeDiscPcd } = useChooseDiscPcd();

  return (
    <FilterInput
      label={'PCD'}
      value={discPcd || ''}
      onChange={(data) => typeof data === 'number' && onChangeDiscPcd(data)}
      type={'number'}
    />
  );
};
