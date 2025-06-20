import { useSetAtom } from 'jotai';
import { Select } from '../../../../../shared/ui/select';
import { gearboxAtom } from '../../../model/atoms-page';
import { GearboxType } from '@autoball-frontend/shared-types';

export const ChooseGearbox = () => {
  const setGearbox = useSetAtom(gearboxAtom);

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    const value =
      target.id === 'not-matter' ? null : (target.value as GearboxType);

  setGearbox(value);
  };

  return (
    <Select
      label={'Коробка передач'}
      onChange={handleOnChange}
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
