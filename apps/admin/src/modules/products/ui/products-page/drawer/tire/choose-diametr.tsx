import { useSetAtom } from 'jotai';
import { Select } from '../../../../../../shared/ui/select';
import { diameterOptions } from '../../../../model/data';
import { TDiameterOption } from '../../../../model/types/dics.interface';
import { tiresDiameterAtom } from '../../../../model/atoms-page';

export const ChooseDiametr = () => {
  const setDiscDiameter = useSetAtom(tiresDiameterAtom);

  return (
    <Select
      label={'Диаметр'}
      onChange={(e) =>
        setDiscDiameter(
          e.target.value === 'not-matter'
            ? null
            : (e.target.value as TDiameterOption)
        )
      }
      options={diameterOptions.map((el) => ({ value: el, title: el }))}
    />
  );
};
