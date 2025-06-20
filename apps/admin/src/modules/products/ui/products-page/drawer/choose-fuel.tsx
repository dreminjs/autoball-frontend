import { useSetAtom } from 'jotai';
import { Select } from '../../../../../shared/ui/select';
import { fuelAtom } from '../../../model/atoms-page';
import { FuelType } from '@autoball-frontend/shared-types';

export const ChooseFuel = () => {
  const setFuel = useSetAtom(fuelAtom);

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    const value =
      target.id === 'not-matter' ? null : (target.value as FuelType);

    setFuel(value);
  };

  return (
    <Select
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
