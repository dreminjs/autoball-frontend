import { useAtom } from 'jotai';
import { availabilityAtom } from '../../../model/product-atoms-page';
import { Select } from '../../../../../shared/ui/select';
import { TAvailability } from '@autoball-frontend/shared-types';

export const ChooseAvailability = () => {
  const [availability, setAvailability] = useAtom(availabilityAtom);

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    const value =
      target.value === 'not-matter' ? null : (target.value as TAvailability);

    setAvailability(value);
  };

  return (
    <Select
      value={availability}
      label={'Доступность'}
      onChange={handleOnChange}
      options={[
        { title: 'в наличии', value: 'in stock' },
        { title: 'под заказ', value: 'custom order' },
      ]}
    />
  );
};
