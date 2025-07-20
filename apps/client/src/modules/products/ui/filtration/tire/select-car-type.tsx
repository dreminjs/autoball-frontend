import { Select } from '@/components/select';
import { tiresCarTypeOptions } from '@/modules/products/model/data';
import { tiresCarTypeAtom } from '@/modules/products/model/product-atoms-page';
import { TTiresCar } from '@/shared/types';
import { useAtom } from 'jotai';

export const SelectCarType = () => {
  const [carType,setCarType] = useAtom(tiresCarTypeAtom);
  return (
    <Select
      label={'Тип Кузова'}
      onChange={(e) => setCarType(
        e.target.value === 'not-matter'
          ? null
          : (e.currentTarget.value as TTiresCar)
      )}
      options={tiresCarTypeOptions.map(el => ({title: el, value:el}))} value={carType}    />
  );
};
