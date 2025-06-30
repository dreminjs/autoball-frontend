import { useAtom } from 'jotai';
import { Select } from '../../../../../shared/ui/select';
import { gearboxAtom } from '../../../model/product-atoms-page';
import { GearboxType } from '@autoball-frontend/shared-types';

export const ChooseGearbox = () => {
  const [gearbox,setGearbox] = useAtom(gearboxAtom);

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    const value =
      target.value === 'not-matter' ? null : (target.value as GearboxType);

  setGearbox(value);
  };

  return (
    <Select
      label={'Коробка передач'}
      onChange={handleOnChange}
      value={gearbox}
      options={[
        {
          title: 'Механическая',
          value: 'manual',
        },
        {
          title: 'Автоматическая',
          value: 'automatic',
        },
        {
          title: 'Роботизированная',
          value: 'robotic',
        },
        {
          title: 'Вариатор',
          value: 'variator',
        },
      ]}
    />
  );
};
