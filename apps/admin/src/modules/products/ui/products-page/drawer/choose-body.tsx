import { useSetAtom } from 'jotai';
import { Select } from '../../../../../shared/ui/select';
import { bodyAtom } from '../../../model/atoms-page';
import { BodyType} from '@autoball-frontend/shared-types';

export const ChooseBody = () => {
  const setBody = useSetAtom(bodyAtom);

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    const value =
      target.id === 'not-matter' ? null : (target.value as BodyType);

    setBody(value);
  };

  return (
    <Select
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
