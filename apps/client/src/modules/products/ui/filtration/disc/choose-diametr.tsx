import { Select } from '@/components/select';
import { diameterOptions } from '@/modules/products/model/data';
import { discDiameterAtom } from '@/modules/products/model/product-atoms-page';
import { TDiameterOption } from '@/modules/products/model/types/dics.interface';
import { useAtom } from 'jotai';

export const ChooseDiametr = () => {
  const [discDiameter, setDiscDiameter] = useAtom(discDiameterAtom);

  return (
    <Select
      label={'Диаметр'}
      onChange={(e) => setDiscDiameter(e.target.value as TDiameterOption)}
      options={diameterOptions.map((el) => ({ value: el, title: el }))}
      value={discDiameter}
    />
  );
};
