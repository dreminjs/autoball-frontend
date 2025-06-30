import { useAtom } from 'jotai';
import { Select } from '../../../../../shared/ui/select';
import { fuelAtom } from '../../../model/product-atoms-page';
import { FuelType } from '@autoball-frontend/shared-types';

export const ChooseFuel = () => {
  const [fuel, setFuel] = useAtom(fuelAtom);

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    const value =
      target.value === 'not-matter' ? null : (target.value as FuelType);

    setFuel(value);
  };

  return (
    <Select
      value={fuel}
      label={'Тип мотора'}
      onChange={handleOnChange}
      options={[
        {
          title: 'Бензин',
          value: 'gasoline',
        },
        {
          title: 'Дизель',
          value: 'diesel',
        },
        {
          title: 'Гибрид',
          value: 'hybrid',
        },
        {
          title: 'Электро',
          value: 'electric',
        },
      ]}
    />
  );
};
