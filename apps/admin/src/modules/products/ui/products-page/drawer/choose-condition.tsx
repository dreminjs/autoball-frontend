import { useSetAtom } from 'jotai';
import { conditionAtom } from '../../../model/product-atoms-page';
import { ProductCondition } from '@autoball-frontend/shared-types';
import { Select } from '../../../../../shared/ui/select';

// ПОКА НЕ ИСПОЛЬЗУЕМ

export const ChooseCondition = () => {
  const setCondition = useSetAtom(conditionAtom);
    return (
    <Select
      label={'Состояние'}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCondition(e.target.value as ProductCondition)}
      options={[{
        value: 'used',
        title: 'Б/У'
      }, {
        value: "new",
        title: "новое"
      }]}
    />
  );
};
