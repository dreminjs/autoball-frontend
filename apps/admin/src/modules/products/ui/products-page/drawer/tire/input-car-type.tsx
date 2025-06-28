import { useSetAtom } from 'jotai';
import { tiresCarTypeAtom } from '../../../../model/atoms-page';
import { Select } from '../../../../../../shared/ui/select';
import { TTiresCar } from '../../../../../../shared/types';
import { tiresCarTypeOptions } from '../../../../model/data';

export const SelectCarType = () => {
  const setCarType = useSetAtom(tiresCarTypeAtom);

  return (
    <Select
      label={'Тип Кузова'}
      onChange={(e) => setCarType(e.currentTarget.value as TTiresCar)}
      options={tiresCarTypeOptions.map(el => ({value: el, title: el}))}
    />
  );
};
