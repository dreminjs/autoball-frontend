// import { BodyType } from '@autoball-frontend/shared-types';
import { Select } from '@/components/select';

export const ChooseBody = () => {

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    // const value =
    //   target.value === 'not-matter' ? null : (target.value as BodyType);

  };

  return (
    <Select
      value={""}
      label={'Тип кузова'}
      onChange={handleOnChange}
      options={[
        { title: 'Седан', value: 'sedan' },
        { title: 'Хэтчбек', value: 'hatchback' },
        { title: 'Купе', value: 'coupe' },
        { title: 'Универсал', value: 'universal' },
        { title: 'Минивэн', value: 'minivan' },
        { title: 'Джип', value: 'jeep' },
        { title: 'Микроавтобус', value: 'minibus' },
        { title: 'Кабриолет', value: 'convertible' },
        { title: 'Фургон', value: 'van' },
        { title: 'Лифтбек', value: 'liftback' },
        { title: 'Компактный', value: 'compact' },
        { title: 'Трактор', value: 'tractor' },
      ]}
    />
  );
};
