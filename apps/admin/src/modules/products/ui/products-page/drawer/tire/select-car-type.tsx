import { useAtom } from 'jotai';
import { tiresCarTypeAtom } from '../../../../model/product-atoms-page';
import { Select } from '../../../../../../shared/ui/select';
import { TTiresCar } from '../../../../../../shared/types';
import { tiresCarTypeOptions } from '../../../../model/data';

export const SelectCarType = () => {
  const [carType, setCarType] = useAtom(tiresCarTypeAtom);

  return (
    <Select
      label={'Тип Кузова'}
      onChange={(e) =>
        setCarType(
          e.target.value === 'not-matter'
            ? null
            : (e.currentTarget.value as TTiresCar)
        )
      }
      options={tiresCarTypeOptions.map((el) => ({
        title: el,
        value: el,
      }))}
      value={carType}
    />
  );
};
