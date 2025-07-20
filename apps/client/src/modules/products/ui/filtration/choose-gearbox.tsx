// import { GearboxType } from '@autoball-frontend/shared-types';
import { Select } from '@/components/select';

export const ChooseGearbox = () => {

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    // const value =
    //   target.value === 'not-matter' ? null : (target.value as GearboxType);

  };

  return (
    <Select
      label={'Коробка передач'}
      onChange={handleOnChange}
      value={""}
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
