import { useSetAtom } from 'jotai';
import { availabilityAtom } from '../../../model/product-atoms-page';
import { TAvailability } from '../../../model/types/availability.interface';
import { Select } from '../../../../../shared/ui/select';

export const ChooseAvailability = () => {
  const setAvailability = useSetAtom(availabilityAtom);

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    const value =
      target.id === 'not-matter' ? null : (target.value as TAvailability);

    setAvailability(value);
  };

  return (
    <Select
      label={'Доступность'}
      onChange={handleOnChange}
      options={[
        { title: 'в наличии', value: 'in stock' },
        { title: 'ХЗ', value: 'custom order' },
      ]}
    />
  );
};
