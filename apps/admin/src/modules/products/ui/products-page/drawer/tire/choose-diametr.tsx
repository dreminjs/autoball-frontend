import { useAtom } from 'jotai';
import { Select } from '../../../../../../shared/ui/select';
import { diameterOptions } from '../../../../model/data';
import { TDiameterOption } from '../../../../model/types/dics.interface';
import { tiresDiameterAtom } from '../../../../model/product-atoms-page';

export const ChooseDiametr = () => {
  const [discDiameter,setDiscDiameter] = useAtom(tiresDiameterAtom);

  return (
    <Select
      label={'Диаметр'}
      value={discDiameter || ""}
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
