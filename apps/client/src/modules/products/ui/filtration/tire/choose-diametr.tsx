import { Select } from '@/components/select';
import { diameterOptions } from '@/modules/products/model/data';
import { tiresDiameterAtom } from '@/modules/products/model/product-atoms-page';
import { TDiameterOption } from '@/modules/products/model/types/dics.interface';
import { useAtom } from 'jotai';

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
