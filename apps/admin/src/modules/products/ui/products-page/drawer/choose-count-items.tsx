import { useAtom } from 'jotai';
import { Select } from '../../../../../shared/ui/select';
import { countItemsAtom } from '../../../model/product-atoms-page';

export const ChooseCountItems = () => {
  const [countItems, setCountItems] = useAtom(countItemsAtom);

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    const value = +target.value;

    setCountItems(value);
  };

  return (
    <Select
      value={countItems}
      label={'Кол-во записей'}
      onChange={handleOnChange}
      options={[
        {
          title: '5',
          value: 5,
        },
        {
          title: '10',
          value: 10,
        },
        {
          title: '15',
          value: 15,
        },
        {
          title: '20',
          value: 20,
        },
      ]}
    />
  );
};
