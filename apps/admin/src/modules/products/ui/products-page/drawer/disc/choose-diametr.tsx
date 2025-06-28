import { useSetAtom } from 'jotai';
import { Select } from '../../../../../../shared/ui/select';
import { diameterOptions } from '../../../../model/data';
import { discDiameterAtom } from '../../../../model/atoms-page';
import { TDiameterOption } from '../../../../model/types/dics.interface';

export const ChooseDiametr = () => {
  const setDiscDiameter = useSetAtom(discDiameterAtom);

  return (
    <Select
      label={'Диаметр'}
      onChange={(e) => setDiscDiameter(e.target.value as TDiameterOption) }
      options={diameterOptions.map((el) => ({ value: el, title: el }))}
    />
  );
};
