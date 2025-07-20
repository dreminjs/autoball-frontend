import { Select } from '@/components/select';
// import { FuelType } from '@autoball-frontend/shared-types';

export const ChooseFuel = () => {

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    // const value =
    //   target.value === 'not-matter' ? null : (target.value as FuelType);

  };

  return (
    <Select
      value={""}
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
